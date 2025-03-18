import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>
        <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10 mb-14">
          <nav className="flex justify-evenly gap-3">
            <Link href="/">Home</Link>
            <Link href="/champions">챔피언 목록</Link>
            <Link href="/items">아이템 목록</Link>
            <Link href="/rotation">챔피언 로테이션</Link>
          </nav>
        </header>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
