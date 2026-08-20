import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

interface StructuredDataProps {
  type?: "website" | "educationalOrganization" | "course";
  name?: string;
  description?: string;
  url?: string;
}

export function StructuredData({
  type = "website",
  name = SITE_NAME,
  description = SITE_DESCRIPTION,
  url = "https://techcompass.app",
}: StructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    name,
    description,
    url,
  };

  const data =
    type === "website"
      ? {
          ...baseData,
          "@type": "WebApplication",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
        }
      : type === "educationalOrganization"
        ? {
            ...baseData,
            "@type": "EducationalOrganization",
          }
        : {
            ...baseData,
            "@type": "Course",
          };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
