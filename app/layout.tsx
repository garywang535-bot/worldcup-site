import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://worldcup-info-hub.example.com"),
  title: {
    default: "2026 World Cup Global Info Hub",
    template: "%s · World Cup Info Hub",
  },
  description:
    "Schedules, standings, scores, teams, and editorial previews for the 2026 finals—fast, mobile-friendly, and wagering-free.",
  openGraph: {
    title: "2026 World Cup Global Info Hub",
    description:
      "Neutral schedules and standings with local kickoff times, plus concise football editorials.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
