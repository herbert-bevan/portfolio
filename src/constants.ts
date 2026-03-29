/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const RESUME_DATA = {
  name: "Herbert Bevan T",
  role: "Full Stack Developer",
  location: "Mugalivakkam, Chennai",
  email: "herbertbevan@gmail.com",
  linkedin: "linkedin.com/in/herbert-bevan",
  summary: "Full stack developer specializing in high-scale data migrations, distributed systems, and cloud-native microservices. Experienced in modernizing legacy platforms, implementing secure identity with Azure AD B2C, and designing event-driven architectures. Proven impact delivering 7M+ record migrations in minutes.",
  achievements: [
    {
      title: "Awarded Cornerstone 2025",
      description: "Company-wide recognition for outstanding engineering contribution and delivery impact."
    }
  ],
  skills: {
    core: ["C#", "SQL", ".NET 8", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "Redis"],
    cloud: ["Azure (AD B2C, Service Bus, Artifacts, Monitor)", "Kubernetes", "Docker", "gRPC", "YARP", "SignalR"],
    devops: ["Git", "Jenkins", "CI/CD Pipelines", "Sonarqube", "Postman", "Argo"],
    workingKnowledge: ["Java", "TypeScript", "JavaScript", "Angular", "MySQL", "Elasticsearch", "OAuth2", "RBAC", "Clean Architecture", "CPM"]
  },
  experience: [
    {
      role: "Software Developer",
      company: "Propeltech Labs India Pvt. Ltd",
      location: "Porur, Chennai",
      period: "Aug 2024 - Present",
      highlights: [
        "Built a tax automation platform using .NET 8 and Clean Architecture.",
        "Engineered a Roll Forward migration engine transferring 7M+ records in under 3 minutes.",
        "Implemented secure authentication and authorization using Azure AD B2C.",
        "Improved API performance by migrating gateway from Ocelot to YARP and introducing gRPC.",
        "Designed Kubernetes DAG workflows in Argo for automated rollback handling.",
        "Architected an event-driven background processing system using Azure Service Bus Pub/Sub."
      ]
    }
  ],
  projects: [
    {
      title: "Sales Forecasting Web Application",
      tech: "Python, Angular",
      description: "Developed a forecasting tool using Flask and Pandas. Implemented linear regression to predict future sales based on historical data."
    },
    {
      title: "String Extension Pack (NuGet Package)",
      tech: "C#, .NET Standard",
      description: "Created a reusable NuGet package offering enhanced string manipulation features (Title Case, Regex validation)."
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "Sri Krishna College of Engineering and Technology",
      period: "2020 - 2024",
      score: "CGPA - 8.8"
    }
  ]
};
