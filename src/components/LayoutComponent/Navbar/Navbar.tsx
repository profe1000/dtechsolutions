import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { navItems, NavItem } from "../../../utils/navigation";

const topLinkClass =
  "flex items-center gap-1.5 text-gray-800 hover:text-blue-600 transition duration-300 font-semibold tracking-wide";

const dropdownPanelClass =
  "absolute top-full invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200";

// Drops focus after a click so :focus-within doesn't keep the dropdown open
const blurActive = () => (document.activeElement as HTMLElement | null)?.blur();

const isActive = (item: NavItem, pathname: string) =>
  item.to === "/home"
    ? pathname === "/" || pathname === "/home"
    : pathname.startsWith(item.to);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { pathname, hash } = useLocation();

  // Close the mobile menu whenever navigation happens
  useEffect(() => {
    setShowMenu(false);
    setOpenSection(null);
  }, [pathname, hash]);

  const closeMenu = () => setShowMenu(false);

  const toggleSection = (label: string) =>
    setOpenSection((current) => (current === label ? null : label));

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-md">
        <div className="relative max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center" onClick={closeMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/logoTrans.png`}
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full space-x-8">
            {navItems.map((item) => {
              const active = isActive(item, pathname);
              const linkClass = `${topLinkClass} ${active ? "text-blue-600" : ""}`;

              if (!item.items && !item.groups) {
                return (
                  <Link key={item.label} to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className={`group h-full flex items-center ${item.items ? "relative" : ""}`}
                >
                  <Link to={item.to} className={linkClass} onClick={blurActive}>
                    {item.label}
                    <DownOutlined className="text-[10px] transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Simple dropdown */}
                  {item.items && (
                    <div className={`${dropdownPanelClass} left-0 w-80`}>
                      <div className="bg-white rounded-b-2xl shadow-xl border border-gray-100 border-t-4 border-t-blue-600 py-3">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={blurActive}
                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mega menu */}
                  {item.groups && (
                    <div className={`${dropdownPanelClass} left-6 right-6`}>
                      <div className="bg-white rounded-b-2xl shadow-xl border border-gray-100 border-t-4 border-t-blue-600 p-8 grid grid-cols-4 gap-8">
                        {item.groups.map((group) => (
                          <div key={group.label}>
                            <Link
                              to={group.to}
                              onClick={blurActive}
                              className="block font-bold text-[#08134D] hover:text-blue-700 transition pb-3 mb-3 border-b border-gray-100"
                            >
                              {group.label}
                            </Link>
                            <ul className="space-y-2">
                              {group.items.map((sub) => (
                                <li key={sub.to}>
                                  <Link
                                    to={sub.to}
                                    onClick={blurActive}
                                    className="text-sm text-gray-600 hover:text-blue-700 transition"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-7 bg-gray-800 transition-all duration-300 ${
                  showMenu ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-7 bg-gray-800 transition-all duration-300 ${
                  showMenu ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-7 bg-gray-800 transition-all duration-300 ${
                  showMenu ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 z-40 overflow-y-auto ${
          showMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="pt-32 pb-12 px-6 max-w-xl mx-auto divide-y divide-gray-100">
          {navItems.map((item) => {
            const hasChildren = Boolean(item.items || item.groups);
            const expanded = openSection === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMenu}
                  className="block py-5 text-gray-800 text-xl font-semibold hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label}>
                <button
                  onClick={() => toggleSection(item.label)}
                  aria-expanded={expanded}
                  className="w-full flex items-center justify-between py-5 text-gray-800 text-xl font-semibold hover:text-blue-600 transition"
                >
                  {item.label}
                  <DownOutlined
                    className={`text-sm transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expanded && (
                  <div className="pb-5 pl-4 space-y-1">
                    {item.items?.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        onClick={closeMenu}
                        className="block py-2 text-gray-600 hover:text-blue-600 transition"
                      >
                        {sub.label}
                      </Link>
                    ))}

                    {item.groups?.map((group) => (
                      <div key={group.label} className="pt-2 pb-3">
                        <Link
                          to={group.to}
                          onClick={closeMenu}
                          className="block py-2 font-semibold text-[#08134D] hover:text-blue-600 transition"
                        >
                          {group.label}
                        </Link>
                        {group.items.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={closeMenu}
                            className="block py-1.5 pl-4 text-gray-600 hover:text-blue-600 transition"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar;
