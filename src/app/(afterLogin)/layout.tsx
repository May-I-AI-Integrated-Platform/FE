'use client'

import Header from "@/component/layout/Header";
import Sidebar from "@/component/layout/Sidebar";
import SettingModal from "@/component/modal/SettingModal";
import useSidebarStorei from "@/store/useSidebarStore";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {
    isSidebarOpen,
  } = useSidebarStorei();

  return (
    <div className={`flex`}>
      <Sidebar />
      <div
        className={`
        ${isSidebarOpen ? `lg:ml-[250px]` : `ml-0`}
        w-screen h-screen transition-all-600-out relative`}>
        <Header />
        {children}
        <SettingModal />
      </div>
    </div>
  );
}
