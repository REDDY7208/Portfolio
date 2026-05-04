import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials – Praveen Kumar Reddy",
  description:
    "Read what colleagues and team leads say about working with Praveen Kumar Reddy — a DevOps Engineer known for CI/CD automation, cloud infrastructure, and MLOps pipeline delivery.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
