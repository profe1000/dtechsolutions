import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_NAME = "ddts_cookie_consent";
const OPEN_EVENT = "ddts:open-cookie-settings";

export type CookieChoice = "accepted" | "essential";

export const getCookieChoice = (): CookieChoice | null => {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  const value = match?.split("=")[1];
  return value === "accepted" || value === "essential" ? value : null;
};

const saveCookieChoice = (choice: CookieChoice) => {
  const oneYear = 60 * 60 * 24 * 365;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${choice}; max-age=${oneYear}; path=/; SameSite=Lax${secure}`;
};

// Lets the footer re-open the banner so visitors can change their choice.
export const openCookieSettings = () =>
  window.dispatchEvent(new Event(OPEN_EVENT));

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieChoice() === null);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const choose = (choice: CookieChoice) => {
    saveCookieChoice(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[70] bg-[#07104D] text-white shadow-2xl border-t border-blue-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row lg:items-center gap-5">
        <p className="flex-1 text-sm leading-7 text-blue-100">
          We use cookies to keep the site working and, with your consent, to
          understand how it is used and improve it. Read our{" "}
          <Link to="/privacy-policy#cookies" className="underline text-white">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" className="underline text-white">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="px-6 py-3 rounded-xl border border-blue-300 text-white font-semibold hover:bg-white/10 transition"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-[#07104D] font-bold transition"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
