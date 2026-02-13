import "./globals.css";
import Navbar from "@/components/layout/narvbar";
import Footer from "@/components/layout/footer";
import PageWrapper from "@/components/animations/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Makovics Technologies | Software & Digital Solutions",
    template: "%s | Makovics Technologies",
  },
  description:
    "Makovics Technologies provides software development, business automation, POS systems, HR platforms, and enterprise digital solutions.",
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://makovicstech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Makovics Technologies",
    description:
      "Enterprise software, automation, and digital solutions built for modern businesses.",
    url: "https://makovicstech.com",
    siteName: "Makovics Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Makovics Technologies",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Makovics Technologies",
    url: "https://makovicstech.com",
    logo: "https://makovicstech.com/logo.png",
    description:
      "Makovics Technologies provides enterprise software development, business automation, POS systems, HR platforms, and digital solutions.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@makovicstech.com",
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* ✅ SEO Structured Data */}
        <StructuredData />

        <Navbar />
        <PageWrapper>
          <main className="min-h-screen">{children}</main>
        </PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
