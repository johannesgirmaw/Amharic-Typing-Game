import type { Metadata } from "next";
import { Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const notoSansEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-amharic",
  subsets: ["ethiopic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amharic Typing Test - አማርኛ እንዴት እና",
  description: "Practice and test your Amharic typing speed and accuracy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="am" dir="ltr">
      <body className={`${notoSansEthiopic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
