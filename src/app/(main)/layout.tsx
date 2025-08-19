import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function mainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
