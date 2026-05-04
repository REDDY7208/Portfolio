import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – Praveen Kumar Reddy | DevOps & MLOps",
  description:
    "DevOps and MLOps services by Praveen Kumar Reddy — CI/CD pipeline design, infrastructure automation with Terraform and Ansible, container orchestration with Kubernetes and Docker, and cloud architecture on AWS, GCP, and Azure.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
