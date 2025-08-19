export default function layoutAdmin({
  children,
  sidebarAdmin,
}: {
  children: React.ReactNode;
  sidebarAdmin: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-between px-[2vw]">
        {sidebarAdmin}
        <div className="w-full ms-64 mt-[3vw]">{children}</div>
      </div>
    </>
  );
}
