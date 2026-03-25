import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Positivus - Digital Marketing Agency | SEO, Social Media & Content Marketing",
    description:
        "Boost your online presence with Positivus, a leading digital marketing agency. Expert SEO, social media marketing, and content strategies for business growth.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("font-sans antialiased", spaceGrotesk.variable)}>
            <body>{children}</body>
        </html>
    );
}
