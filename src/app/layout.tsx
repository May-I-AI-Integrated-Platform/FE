import { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "May-I_?",
  description: "AI_Integrate_Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className={`z-9999`} id="portal-root" />
      </body>
    </html>
  );
}
