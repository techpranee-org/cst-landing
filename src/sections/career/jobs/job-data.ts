export type Job = {
  id: number;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string,
  responsibilities: string[];
  requirements: string[];
  pdfUrl: string;
  positionsAvailable: number;
  salaryRange: string;
  companyName: string;
  companyWebsite: string;
  jobPostedDate: string;
  jobExpirationDate: string;
  applicationEmail: string;
};

export const jobs: Job[] = [
    {
    id: 12570,
    title: "Business Analyst ",
    location: "West Bloomfield, Michigan 48301",
    type: "Full-Time",
    experience: "60 months",
    description: "California SoftTech Inc, Bloomfield Hills, MI based Software Consulting Firm has multiple openings for  JOB ID 12570: Business Analyst .",
    responsibilities: [
      ".Work with stakeholders and cross-functional teams to support alignment and successful project delivery.",
      ".Develop and maintain user requirements using user stories with UX/UI designers.",
      ".Design dashboards and reports that inform product strategy and decision making.",
      "Monitor requirements status and contribute to wireframes, project scoping, and effort estimation.",
      "Execute requirements validation to confirm alignment with customer and business goals."
    ],
    requirements: [
      "Bachelor's degree in CS, IT  or related.",
      "60 months of relevant experience.",
      "Travel and relocation to various unanticipated client locations throughout the United States may be required. Equal Opportunity Employer.",
    ],
    pdfUrl: "/pdfs/Business_Analyst.pdf",
    positionsAvailable: 0,
    salaryRange: "$121,784.00 - $123,000.00/year",
    companyName: "California SoftTech Inc",
    companyWebsite: "https://www.calisofttech.com/",
    jobPostedDate: "2026-04-30",
    jobExpirationDate: "2026-06-01",
    applicationEmail: "hr@calisofttech.com"
  },
  {
    id: 11454,
    title: "Statistical Programmer",
    location: "West Bloomfield, Michigan 48322",
    type: "Full-Time",
    experience: "60 months",
    description: "California SoftTech Inc, a West Bloomfield Township, MI based Software Consulting Firm has multiple openings for  JOB ID 11454: Statistical Programmer.",
    responsibilities: [
      "Identify business requirements through consultation, analysis, and observation, delivering innovative solutions tailored to client needs within SAP environments.",
      "Participate in every stage of the deployment process including planning, implementation, testing, readiness for launch, and ongoing support after the launch.",
      "Develop strategies for process improvement and conduct training sessions for employees on new software/systems.",
      "Create technical specifications and document application functionality as reference for future maintenance and upgrades.",
      "Customize and implement various modules to meet client needs effectively while ensuring efficient operation and cross-functional integration.",
      "Prepare change request documents for customization-related changes and update customization documentation with the updated version.",
      "Provide post-implementation support and resolve critical and high-priority tickets per SLAs."
    ],
    requirements: [
      "Bachelor's degree in Science, Math, Pharmacy or related.",
      "60 months of relevant experience.",
      "Travel and relocation to various unanticipated client locations throughout the United States may be required. Equal Opportunity Employer.",
    ],
    pdfUrl: "/pdfs/statistical_programmer.pdf",
    positionsAvailable: 10,
    salaryRange: "$132,350.00 - $137,000.00/year",
    companyName: "California SoftTech Inc",
    companyWebsite: "https://www.calisofttech.com/",
    jobPostedDate: "2025-05-02",
    jobExpirationDate: "2025-06-01",
    applicationEmail: "hr@calisofttech.com"
  },
  {
    id: 12314,
    title: "QA Specialist",
    location: "Bloomfield Hills, Michigan",
    type: "Full-Time",
    experience: "60 months",
    description: "California SoftTech Inc, a Bloomfield Hills, MI based Software Consulting Firm has multiple openings for JOB ID 12314: QA Specialist.",
    responsibilities: [
      "Coordinate with formulation and process teams to gather key product-related information to ensure compliance with quality and regulatory requirements.",
      "Identify risks, implement and track corrective/preventive actions (CAPA) to maintain product reliability.",
      "Participate in in-process checks, stability testing, and batch record reviews to verify product quality.",
      "Partner with Regulatory Affairs, Quality Control, and Manufacturing teams to investigate deviations, OOS (Out-of-Spec) results, and non-conformances, ensuring timely resolution and documentation.",
      "Provide updates to team members and stakeholders on quality metrics, audit findings, and compliance status."
    ],
    requirements: [
      "Bachelor's degree in Science, Pharmacy or related.",
      "60 months of relevant experience.",
      "Travel and relocation to various unanticipated client locations throughout the United States may be required. Equal Opportunity Employer."
    ],
    pdfUrl: "",
    positionsAvailable: 10,
    salaryRange: "$97,906.00 - $100,000.00/year",
    companyName: "California SoftTech Inc",
    companyWebsite: "https://www.calisofttech.com/",
    jobPostedDate: "2026-02-13",
    jobExpirationDate: "2026-03-15",
    applicationEmail: "hr@calisofttech.com"
  }
];
