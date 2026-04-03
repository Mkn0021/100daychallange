import { cn } from "@/lib/utils";
import styles from "./page.module.css";
import { DM_Sans, Inter } from "next/font/google";
import { Navbar } from "@/components/day-04/navbar";
import { Footer } from "@/components/day-04/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export default function Day04Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cn(styles.root, inter.variable, dmSans.variable, "antialiased")}>
            <Navbar />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
}
