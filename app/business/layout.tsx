import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business – Praveen Kumar Reddy | Web Development & Digital Marketing",
  description:
    "Professional website development and social media marketing services by Praveen Kumar Reddy. Get a complete business website for ₹10,000 including design, development, hosting, domain setup, SEO, and support.",
};

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
