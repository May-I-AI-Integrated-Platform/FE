import Sidebar from "@/component/layout/Sidebar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex`}>
      <Sidebar/>
      {children}
    </div>
  );
}
