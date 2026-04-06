export const personalInfo = {
  name: "Amanda Reyes",
  location: "CDMX",
  email: "arh.2001@outlook.com",
  github: "https://github.com/areshr",
  linkedin: "www.linkedin.com/in/amanda-reyes-hernandez-437681262",
  profilePicture: "/profile.jpeg",
  heroDescription:
    "Junior Data Engineer focused on SQL and Python. Experience designing PostgreSQL schemas, building data ingestion pipelines, and integrating telemetry/IoT data through REST APIs (JSON). Interested in data engineering roles to grow in ETL/ELT environments and Cloud Platforms.",
};

export const workExperience = [
  {
    company: "CISA Corredor Insurgentes S.A. de C.V.",
    location: "Mexico City",
    position: "Intern Project Coordinator and Data Engineering",
    period: "JFeb 2024 - March 2026",
    achievements: [
      "Designed and implemented a PostgreSQL database and relational data model to capture and standardize telemetry/IoT operational events.",
      "Applied normalization and constraints (NOT NULL, UNIQUE, FK, CHECK) to ensure data consistency and integrity.",
      "Developed Python ingestion scripts (psycopg2, pandas) to automatically insert AI-generated events (~400/day) into PostgreSQL.",
      "Generated structured, JSON-ready outputs for downstream integrations and reporting systems.",
      "Integrated with a third-party REST API (POST), validating JSON payloads and supporting end-to-end data flow testing using Postman.",
      "Performed data validation and troubleshooting across database and API layers to ensure reliable data delivery.",
      "Coordinated a 3-person team, documented data workflows, and communicated progress to stakeholders.",
    ],
  },
];

export const education = [
  {
    institution: "IPN - UPIITA",
    location: "CDMX",
    degree: "Telematics Engineering (In progress)",
    period: "2020 - 2026",
    achievements: [
      "Expected graduation: July 2026",
      "Relevant coursework: Databases, Information Systems, Data Processing, Networking",
    ],
  },
];
export const skills = {
  programmingLanguages: ["Python", "SQL", "C++", "JavaScript"],
  frontendDevelopment: ["React (basic)", "API Consumption"],
  backendDevelopment: ["REST APIs", "JSON", "Data Integration"],
  databaseAndStorage: [
    "PostgreSQL",
    "Data Modeling",
    "Database Design",
    "Normalization",
    "Constraints (NOT NULL, FK, CHECK)",
  ],
  cloudAndDevOps: ["AWS EC2", "Linux"],
  toolsAndServices: [
    "pandas",
    "psycopg2",
    "Git",
    "GitHub",
    "Postman",
    "Data Ingestion",
    "Data Pipelines",
    "Telemetry Data",
    "Technical Documentation",
  ],
};

export const projects = [
  {
    title: "Operational Event Data Pipeline",
    description: [
      "Built an end-to-end data pipeline to process telemetry events from a computer vision system and store them in PostgreSQL.",
      "Designed the relational data model to standardize unit-pass events and ensure data consistency.",
      "Implemented data ingestion logic in Python (psycopg2) to insert AI-generated events (~400/day).",
      "Generated structured JSON outputs for integration with external platforms and dashboards.",
      "Integrated with a third-party REST API, validating payloads and supporting end-to-end data flow testing.",
    ],
  },
  {
    title: "Terminal Project: HIS with NFC Identification",
    github: "https://github.com/loremipsum/dolorapp",
    description: [
      "Designed system workflows and data structures for patient identification using NFC wristbands.",
      "Implemented backend logic and PostgreSQL data model focused on data consistency and traceability.",
      "Built REST API endpoints to integrate NFC event data into the system workflow.",
      "Deployed backend services on AWS EC2.",
      "Ensured audit-friendly data handling through structured event tracking.",
    ],
  },
];

export const certifications = [
  {
    name: "Python Fundamentals",
    issuer: "Platzi",
    date: "2023",
    type: "Certificate",
  },
  {
    name: "Regular Expressions",
    issuer: "Platzi",
    date: "2023",
    type: "Certificate",
  },
  {
    name: "Command Line & Terminal",
    issuer: "Platzi",
    date: "2023",
    type: "Certificate",
  },
  {
    name: "AI Foundations for Data & ML",
    issuer: "Platzi",
    date: "2024",
    type: "Certificate",
  },
  {
    name: "Fundamentals of Software Engineering",
    issuer: "Platzi",
    date: "2023",
    type: "Certificate",
  },
];


