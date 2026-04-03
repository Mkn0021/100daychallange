import { Section } from "./ui/section";
import { DashedBorder } from "./hero-section";
import {
    ArcLogo,
    DescriptLogo,
    MercuryLogo,
    MonzoLogo,
    PerplexityLogo,
    RampLogo,
    RaycastLogo,
    RetoolLogo,
    WatershedLogo,
} from "./ui/brand-logos";
import { cn } from "@/lib/utils";

const logoBrands = [
    { id: "mercury", logo: MercuryLogo },
    { id: "watershed", logo: WatershedLogo },
    { id: "retool", logo: RetoolLogo },
    { id: "descript", logo: DescriptLogo },
    { id: "perplexity", logo: PerplexityLogo },
    { id: "monzo", logo: MonzoLogo },
    { id: "ramp", logo: RampLogo },
    { id: "raycast", logo: RaycastLogo },
    { id: "arc", logo: ArcLogo },
];

export const BrandSection = () => (
    <Section className="relative">
        <h2
            className="text-foreground mx-auto max-w-4xl text-center text-xl leading-tight font-bold md:text-[27px]"
            style={{ fontFamily: "var(--font-dm)" }}
        >
            Powering the world’s best product teams.{" "}
            <span className="text-muted-foreground md:block">
                From next-gen startups to established enterprises.
            </span>
        </h2>
        <div className="grid py-12.5">
            <BrandRow brands={logoBrands.slice(0, 4)} className="grid-cols-4" />
            <BrandRow brands={logoBrands.slice(4, 9)} className="grid-cols-5" />
        </div>

        <DashedBorder variant="vertical" className="absolute inset-x-0 bottom-0" />
        <p className="absolute -bottom-1.75 left-1/2 hidden -translate-x-1/2 bg-white px-2 text-sm uppercase md:block">
            measure twice. cut once.
        </p>
    </Section>
);

const BrandRow = ({ brands, className }: { brands: typeof logoBrands; className?: string }) => (
    <ul className={cn("grid justify-items-center", className)}>
        {brands.map((brand) => (
            <li key={brand.id}>
                <brand.logo className="h-10 lg:h-16" />
            </li>
        ))}
    </ul>
);
