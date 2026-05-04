import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Praveen Kumar Reddy | DevOps Portfolio",
  description:
    "Explore DevOps and MLOps projects by Praveen Kumar Reddy — including enterprise AI education platforms, hybrid cloud infrastructure on AWS and GCP, automated CI/CD pipelines, and Kubernetes microservices deployments.",
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
