import { Link } from "react-router-dom";
import LegalPage, {
  LegalSection,
} from "../../../components/sharedLandingcomponents/LegalPage";
import { openCookieSettings } from "../../../components/sharedLandingcomponents/CookieConsent";
import { COMPANY } from "../../../utils/company";
import "../landingpages.css";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    body: (
      <p>
        {COMPANY.name} ("we", "us", "our") is an IT advisory and implementation
        company based in Lagos, Nigeria
        {COMPANY.cacNumber ? ` (CAC Registration No. ${COMPANY.cacNumber})` : ""}
        . We are the controller of the personal data collected through this
        website. You can reach us at{" "}
        <a className="text-blue-700 underline" href={`mailto:${COMPANY.email}`}>
          {COMPANY.email}
        </a>{" "}
        or on{" "}
        <a className="text-blue-700 underline" href={COMPANY.phoneHref}>
          {COMPANY.phoneDisplay}
        </a>
        .
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>We collect only what we need to respond to you and run the site:</p>
        <ul>
          <li>
            <strong>Information you give us</strong> – your name, email
            address, phone number, company and message when you use our contact
            form, email or phone us, or book a consultation.
          </li>
          <li>
            <strong>Technical information</strong> – IP address, browser type,
            device and the pages you visit, collected through cookies and
            similar technologies (see Cookies below).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <ul>
        <li>To respond to enquiries and arrange consultations.</li>
        <li>To prepare proposals and deliver and support our services.</li>
        <li>To keep the website secure and improve how it works.</li>
        <li>To meet our legal and regulatory obligations.</li>
      </ul>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal Basis",
    body: (
      <p>
        We process personal data under the Nigeria Data Protection Act 2023
        (NDPA) on the basis of your consent (for example, non-essential
        cookies), to take steps at your request before entering into a
        contract, for our legitimate interests in running and securing our
        business, and to comply with legal obligations.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <>
        <p>
          Cookies are small text files stored on your device. We use them as
          follows:
        </p>
        <ul>
          <li>
            <strong>Essential cookies</strong> – needed for the site to work,
            including the cookie (<code>ddts_cookie_consent</code>) that
            remembers your choice for 12 months. These are always on.
          </li>
          <li>
            <strong>Analytics and performance cookies</strong> – used only if
            you choose "Accept All", to understand how visitors use the site.
          </li>
        </ul>
        <p>
          You can change your choice at any time using{" "}
          <button
            type="button"
            onClick={openCookieSettings}
            className="text-blue-700 underline"
          >
            Cookie Settings
          </button>{" "}
          or by clearing cookies in your browser settings.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    body: (
      <p>
        We do not sell your personal data. We share it only with service
        providers that help us run the website and communicate with you (for
        example, email and hosting providers), with professional advisers, and
        with authorities where the law requires. Providers act on our
        instructions and must protect your data.
      </p>
    ),
  },
  {
    id: "retention-security",
    title: "Retention and Security",
    body: (
      <p>
        We keep personal data only as long as needed for the purposes above or
        as the law requires. We use reasonable technical and organisational
        measures to protect it, but no online transmission is completely
        secure.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>Under the NDPA you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you;</li>
          <li>have inaccurate data corrected or erased;</li>
          <li>object to or restrict certain processing;</li>
          <li>withdraw consent at any time;</li>
          <li>
            lodge a complaint with the Nigeria Data Protection Commission
            (NDPC).
          </li>
        </ul>
        <p>
          To exercise these rights, contact us using the details in section 1.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. The date at the top shows
        when it was last changed. See also our{" "}
        <Link to="/terms-of-use" className="text-blue-700 underline">
          Terms of Use
        </Link>
        .
      </p>
    ),
  },
];

const PrivacyPolicy = () => (
  <LegalPage
    badge="PRIVACY POLICY"
    title="Privacy Policy"
    updated="24 November 2026"
    intro="This policy explains what personal information Data Design Tech Solutions collects through this website, why we collect it, and the choices and rights you have."
    sections={sections}
  />
);

export default PrivacyPolicy;
