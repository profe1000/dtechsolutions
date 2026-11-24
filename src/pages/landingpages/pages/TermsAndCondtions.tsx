import { Link } from "react-router-dom";
import LegalPage, {
  LegalSection,
} from "../../../components/sharedLandingcomponents/LegalPage";
import { COMPANY } from "../../../utils/company";
import "../landingpages.css";

// DRAFT: placeholder terms until the final Terms of Use are supplied.
const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        By accessing or using this website you agree to these Terms of Use. If
        you do not agree, please do not use the site.
      </p>
    ),
  },
  {
    id: "about-site",
    title: "About This Website",
    body: (
      <p>
        This website is operated by {COMPANY.name}, Lagos, Nigeria
        {COMPANY.cacNumber ? ` (CAC Registration No. ${COMPANY.cacNumber})` : ""}
        . It provides general information about our IT advisory,
        implementation, training and support services.
      </p>
    ),
  },
  {
    id: "use-of-site",
    title: "Acceptable Use",
    body: (
      <ul>
        <li>Use the site only for lawful purposes.</li>
        <li>
          Do not attempt to gain unauthorised access to the site or its
          systems, or interfere with its operation.
        </li>
        <li>Do not submit false, misleading or malicious information.</li>
      </ul>
    ),
  },
  {
    id: "services",
    title: "Services and Proposals",
    body: (
      <p>
        Information on this site is not a binding offer. Our services are
        provided under a separate written proposal or agreement agreed with
        each client, which sets out the scope, fees and responsibilities.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        The content, logos and design of this website belong to {COMPANY.name}{" "}
        or its licensors and may not be copied or reused without our written
        permission.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Disclaimer and Limitation of Liability",
    body: (
      <p>
        We work to keep the information on this site accurate, but provide it
        "as is". To the extent the law allows, we are not liable for any loss
        arising from your use of, or reliance on, this website.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy and Cookies",
    body: (
      <p>
        Our use of personal data and cookies is described in our{" "}
        <Link to="/privacy-policy" className="text-blue-700 underline">
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law and Changes",
    body: (
      <p>
        These terms are governed by the laws of the Federal Republic of
        Nigeria. We may update them from time to time; continued use of the
        site means you accept the updated terms. Questions can be sent to{" "}
        <a className="text-blue-700 underline" href={`mailto:${COMPANY.email}`}>
          {COMPANY.email}
        </a>
        .
      </p>
    ),
  },
];

const TermsAndCondtions = () => (
  <LegalPage
    badge="TERMS OF USE"
    title="Terms of Use"
    updated="24 November 2026"
    intro="Please read these terms carefully before using the Data Design Tech Solutions website."
    sections={sections}
  />
);

export default TermsAndCondtions;
