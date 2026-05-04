import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Praveen Kumar Reddy",
  description:
    "Get in touch with Praveen Kumar Reddy for DevOps consulting, MLOps automation, cloud infrastructure projects, or collaboration opportunities. Available via email, phone, and WhatsApp.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
