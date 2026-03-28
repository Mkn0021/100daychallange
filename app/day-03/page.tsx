import styles from "./page.module.css";

import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";

const font = Syne({ subsets: ["latin"] });

export default function Day02() {
    return (
        <div
            className={cn(
                styles.root,
                font.className,
            )}
        >
            hello
        </div>
    );
}
