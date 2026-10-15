export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-[#f5f5f7] min-h-screen">{children}</div>;
}
