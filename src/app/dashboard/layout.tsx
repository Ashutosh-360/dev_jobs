export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-1">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="w-30">ffffffff</nav>
      {children}
    </section>
  );
}
