export interface PolicyDoc {
  slug: string;
  title: string;
  category: string;
  lastUpdated: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const policiesData: Record<string, PolicyDoc> = {
  "donation": {
    slug: "donation",
    title: "Donation & Financial Transparency Policy",
    category: "Financial Governance",
    lastUpdated: "January 2026",
    summary: "Islah Foundation is committed to 100% financial integrity, ethical fundraising, and accountability for every rupee contributed by our supporters.",
    sections: [
      {
        heading: "1. Ethical Fundraising Commitment",
        content: [
          "Islah Foundation operates as a registered public charitable trust dedicated to educational equity and community welfare in Kishanganj, Bihar.",
          "All contributions are utilized strictly for approved charitable purposes including after-school learning support, student learning kits, mentoring, digital literacy, and community welfare.",
          "We do not engage in aggressive or deceptive fundraising practices. Solicitations reflect true operational needs on the ground."
        ]
      },
      {
        heading: "2. Donation Receipts & Tax Compliance",
        content: [
          "Official digital receipts are generated for all contributions received via bank transfer, UPI, or online payment gateways.",
          "Donors receive an official acknowledgment containing the Trust registration details and transaction reference for record-keeping.",
          "Donors are requested to provide accurate contact details and PAN numbers (where applicable) to comply with statutory reporting regulations."
        ]
      },
      {
        heading: "3. Utilization & Fund Allocation",
        content: [
          "Contributions designated for specific programmes (e.g., Islah Learning Support Programme) are restricted to those initiatives.",
          "Undesignated funds are allocated to immediate operational needs, learning materials, teacher honorariums, and expansion of educational access in underserved villages.",
          "Annual audited financial statements are reviewed by independent chartered accountants and published for public transparency."
        ]
      },
      {
        heading: "4. Cancellation & Refund Policy",
        content: [
          "Donations made to Islah Foundation are voluntary contributions toward public charitable work and are generally non-refundable.",
          "In the event of an accidental duplicate transaction or technical error during online payment, donors may submit a written refund request to info@islahfoundation.org within 7 days of the transaction.",
          "Valid refund claims will be verified against banking records and processed back to the original payment source within 10 to 14 business days."
        ]
      }
    ]
  },
  "privacy": {
    slug: "privacy",
    title: "Privacy & Data Protection Policy",
    category: "Data Governance",
    lastUpdated: "January 2026",
    summary: "How Islah Foundation collects, uses, and safeguards personal information from donors, volunteers, applicants, and community members.",
    sections: [
      {
        heading: "1. Information We Collect",
        content: [
          "We collect personal information provided voluntarily through our website forms, including names, email addresses, phone numbers, addresses, and resumes submitted for volunteer or internship opportunities.",
          "For online contributions, transaction metadata is collected securely via verified payment gateway partners. We do not store raw credit card numbers or banking passwords on our servers."
        ]
      },
      {
        heading: "2. Protection of Minor & Student Data",
        content: [
          "Islah Foundation works closely with underserved children. Protecting the identity and dignity of minors is central to our operational ethics.",
          "Photographs or case stories of students are published only with informed parental or guardian consent.",
          "Identifiable personal details of minor beneficiaries (e.g. home addresses or contact numbers) are strictly confidential and never publicly disclosed."
        ]
      },
      {
        heading: "3. Use of Personal Information",
        content: [
          "Collected data is used exclusively to process donations, issue receipts, communicate organizational updates, process volunteer applications, and address community grievances.",
          "Islah Foundation NEVER sells, rents, trades, or shares donor or volunteer contact information with external commercial third parties."
        ]
      },
      {
        heading: "4. Data Security & Storage",
        content: [
          "We implement standard security procedures and encrypted communication protocols (HTTPS/SSL) to prevent unauthorized access, disclosure, or modification of personal data.",
          "Users may contact info@islahfoundation.org at any time to request updates to their stored contact preferences or data deletion."
        ]
      }
    ]
  },
  "child-safeguarding": {
    slug: "child-safeguarding",
    title: "Child Safeguarding & Protection Policy",
    category: "Operational Governance",
    lastUpdated: "January 2026",
    summary: "Our mandatory framework ensuring a safe, respectful, and protective environment for all children participating in Islah Foundation programmes.",
    sections: [
      {
        heading: "1. Core Principles & Zero Tolerance",
        content: [
          "Islah Foundation maintains ZERO TOLERANCE for any form of physical harm, emotional abuse, verbal degradation, exploitation, or neglect of children.",
          "Every child participating in our learning support centres has an absolute right to physical safety, emotional wellbeing, and dignity regardless of background, gender, or religion."
        ]
      },
      {
        heading: "2. Code of Conduct for Staff & Volunteers",
        content: [
          "All staff members, teachers, mentors, and volunteers must strictly adhere to our Safeguarding Code of Conduct.",
          "No adult representative is permitted to remain alone in an unmonitored private space with a minor student without another authorized team member present.",
          "Physical discipline or humiliation is strictly prohibited under any circumstances across all learning centres."
        ]
      },
      {
        heading: "3. Verification & Onboarding",
        content: [
          "All prospective volunteers and staff members working directly with children undergo identity verification, reference checks, and a mandatory safeguarding orientation prior to community deployment."
        ]
      },
      {
        heading: "4. Incident Reporting & Grievance Mechanism",
        content: [
          "Any safety concern or suspicion of misconduct must be reported immediately to our designated Safeguarding Officer at info@islahfoundation.org or through our confidential Grievance Redressal portal.",
          "All reported incidents are investigated promptly and discreetly in full cooperation with statutory child protection authorities."
        ]
      }
    ]
  },
  "terms": {
    slug: "terms",
    title: "Terms of Use",
    category: "Legal & Website Terms",
    lastUpdated: "January 2026",
    summary: "Terms and conditions governing the use of the Islah Foundation website and digital resources.",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: [
          "By accessing and using this website (islahfoundation.org), you agree to comply with and be bound by these Terms of Use and our Privacy Policy.",
          "If you do not agree with any part of these terms, please refrain from using our online services."
        ]
      },
      {
        heading: "2. Intellectual Property Rights",
        content: [
          "All text, graphics, logos, images, reports, and digital publications displayed on this website are the intellectual property of Islah Foundation unless otherwise stated.",
          "Content may be shared for non-commercial educational or advocacy purposes provided Islah Foundation is explicitly cited as the source."
        ]
      },
      {
        heading: "3. User Conduct & Form Submissions",
        content: [
          "Users agree not to use the website for fraudulent purposes, upload malicious scripts, or submit false identity information in volunteer, internship, or grievance forms."
        ]
      },
      {
        heading: "4. Disclaimers & Limitation of Liability",
        content: [
          "While we strive to ensure all information presented on our platform is accurate and current, website content is provided on an 'as is' basis.",
          "Islah Foundation reserves the right to modify or update website content and operational policies at any time without prior notice."
        ]
      }
    ]
  }
};
