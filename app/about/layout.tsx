import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Praveen Kumar Reddy | DevOps Engineer",
  description:
    "Learn about Praveen Kumar Reddy, a DevOps Engineer with 2+ years of experience in MLOps, CI/CD pipelines, Kubernetes, Terraform, AWS, GCP, and Azure. View skills, experience, education, and certifications.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
