import { Button } from "./ui/button";
import { Section, SectionCard, SectionTitle } from "./ui/section";

export const HeroSection = () => (
    <Section className="mt-15 px-2 sm:mt-15 md:px-8">
        <SectionCard
            variant="accent"
            className="relative overflow-hidden rounded-[20px] px-6 py-12 md:rounded-[50px] md:px-15 md:py-22.5"
        >
            <div className="flex flex-col justify-between gap-2 text-sm font-bold md:text-[1.38rem] xl:flex-row">
                <p>OCTOBER 15-17, 2052</p>
                <p>Horizon Convention Center, TechCity, Utopolis</p>
            </div>
            <SectionTitle className="relative z-1 mt-20">NEXT-GEN AI SUMMIT</SectionTitle>
            <p className="relative z-1 mt-7.5 max-w-3xl text-[1.38rem]">
                Explore the cutting-edge innovations shaping the future of artificial intelligence.
                Join global leaders and visionaries for two days of insights, discussions, and
                breakthroughs.
            </p>
            <Button link variant="primary" className="relative z-1 mt-27.5">
                Early bird tickets
            </Button>
            <HeroIllustration className="absolute -right-15 -bottom-20 md:-bottom-15 xl:right-30 xl:bottom-12.5" />
        </SectionCard>
    </Section>
);

const HeroIllustration = ({ className }: { className?: string }) => (
    <svg
        width={438}
        height={443}
        viewBox="0 0 438 443"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="m1.011 141.205 69.616 127.531c3.555 6.582-2.165 14.284-9.31 13.039l-31.178-5.489c-4.864-.717-9.531 2.421-10.247 7.289L12.64 324.21c-.716 4.868 2.42 9.539 7.284 10.257l143.225 25.195c7.465 1.228 9.868 10.446 4.337 15.561l-23.713 20.863c-3.688 3.41-4.05 8.905-.642 12.595l27.326 30.811c3.407 3.691 8.897 4.054 12.585.644l108.672-96.402c5.532-5.115 14.413-1.382 14.808 6.328l1.629 31.805c.247 4.819 4.313 8.798 9.449 8.535l41.088-2.105c4.815-.247 8.791-4.316 8.527-9.456l-7.439-145.211c-.379-7.389 8.075-12.01 14.083-7.808l25.721 18.331c4.017 3.015 9.441 2.093 12.454-1.927l24.034-33.442c3.012-4.019 2.091-9.448-1.926-12.463l-117.955-84.792c-6.025-4.523-4.577-13.938 2.724-15.922l30.454-8.647c4.766-1.21 7.408-6.177 6.198-10.947l-11.366-39.681c-1.21-4.77-6.173-7.415-10.939-6.204l-139.9 39.7c-7.3 1.985-13.457-5.109-10.593-12.02l12.339-29.3c2.016-4.612-.173-9.653-4.782-11.672L152.164.753c-4.61-2.019-9.647.172-11.663 4.785L84.283 139.515c-2.865 6.911-12.495 7.405-16.05.823l-15.268-27.886c-2.478-4.382-7.713-6.047-12.091-3.568L4.559 128.783c-4.362 2.8-5.704 8.023-3.548 12.422m133.875 31.15 30.389-72.743c3.136-7.891 14.436-7.181 16.79 1.073l6.642 22.851c1.21 4.77 6.173 7.414 10.939 6.204l75.814-21.6c8.248-2.355 14.52 6.987 9.713 13.675l-13.812 19.39c-3.012 4.02-2.09 9.448 1.926 12.463l64.151 45.996c7.004 4.795 3.712 15.916-4.634 16.343l-23.754 1.217c-4.815.247-8.791 4.316-8.528 9.456l4.033 78.71c.428 8.353-9.968 12.75-15.771 6.283l-16.025-17.539c-3.407-3.69-8.897-4.053-12.585-.643l-58.81 51.973c-6.477 5.486-16.083.18-14.584-8.272l4.271-23.41c.717-4.869-2.419-9.54-7.284-10.257l-77.625-13.739c-8.444-1.5-10.304-12.678-2.781-16.607l20.98-11.382c4.379-2.479 6.042-7.718 3.564-12.101L90.242 180.44c-3.927-7.529 3.366-15.956 11.268-12.495l22.033 9.178c4.272 1.714 9.326-.155 11.343-4.768"
            fill="url(#a)"
        />
        <defs>
            <linearGradient
                id="a"
                x1={425.675}
                y1={154.515}
                x2={-95.204}
                y2={250.826}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#0147ff" />
                <stop offset={1} stopColor="#0147ff" stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>
);
