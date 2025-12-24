import "./globals.css";
import Navbar from "@/components/layout/narvbar";
import Footer from "@/components/layout/footer";
import PageWrapper from "@/components/animations/PageWrapper";

export const metadata = {
  title: {
    default: "Makovics Technologies | Software & Digital Solutions",
    template: "%s | Makovics Technologies",
  },
  description:
    "Makovics Technologies provides software development, web, and mobile solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <PageWrapper>
          <main className="min-h-screen">{children}</main>
        </PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
