import Sidebar from "@/components/sidebar/Sidebar";

export default function ProductLayout({ children, modals }: Props) {
  return (
    <section className="flex justify-center items-start">
      <Sidebar />
      {children}
      {modals}
    </section>
  );
}

interface Props {
  children: React.ReactNode;
  modals: React.ReactNode;
}
