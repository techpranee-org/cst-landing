export type Job = {
  id: number;
  title: string;
  location: string;
  type: string;
  experience: string;
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
    id: 11454,
    title: "Statistical Programmer",
    location: "West Bloomfield, Michigan 48322",
    type: "Full-Time",
    experience: "60 months",
    responsibilities: [
      "Identify business requirements through consultation, analysis, and observation, delivering innovative solutions tailored to client needs within SAP environments.",
      "Participate in every stage of the deployment process including planning, implementation, testing, readiness for launch, and support.",
      "Develop strategies for process improvement and conduct training sessions for employees on new software/systems.",
      "Create technical specifications and document application functionality for future maintenance and upgrades.",
      "Customize and implement various modules to meet client needs while ensuring efficient operation and cross-functional integration.",
      "Prepare change request documents and update customization documentation.",
      "Provide post-implementation support and resolve critical and high-priority tickets per SLAs."
    ],
    requirements: [
      "Bachelor's degree in Science, Math, Pharmacy or related",
      "60 months of relevant experience",
      "Travel and relocation to various unanticipated client locations throughout the United States may be required"
    ],
    pdfUrl: "/pdfs/statistical_programmer.pdf",
    positionsAvailable: 10,
    salaryRange: "$132,350.00 - $137,000.00/year",
    companyName: "California SoftTech Inc",
    companyWebsite: "https://www.calisofttech.com/",
    jobPostedDate: "2025-05-02",
    jobExpirationDate: "2025-06-01",
    applicationEmail: "hr@calisofttech.com"
  }
];
