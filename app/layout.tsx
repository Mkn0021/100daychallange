import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "100 Days of UI",
    description: "100 days of UI projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
