import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum Institute",
  description: "Integrating science and consciousness for holistic well-being.",
  icons: {
    icon: '/Logo/Quantum%20institute%20-%20fav.png',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
