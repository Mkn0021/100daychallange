import {
    ConfluenceLogo,
    ExcelLogo,
    GdriveLogo,
    JiraLogo,
    MondayLogo,
    NotionLogo,
    SharepointLogo,
    WordLogo,
} from "../ui/brand-logos";

const logos = [
    {
        id: "confluence",
        logo: ConfluenceLogo,
    },
    {
        id: "excel",
        logo: ExcelLogo,
    },
    {
        id: "notion",
        logo: NotionLogo,
    },
    {
        id: "word",
        logo: WordLogo,
    },
    {
        id: "monday",
        logo: MondayLogo,
    },
    {
        id: "gdrive",
        logo: GdriveLogo,
    },
    {
        id: "jira",
        logo: JiraLogo,
    },
    {
        id: "sharepoint",
        logo: SharepointLogo,
    },
];

export const LogoCloud = () => (
    <div className="grid grid-cols-5 gap-x-8 gap-y-5 mask-r-from-80% mask-l-from-80% py-12.5 md:gap-x-10">
        <div />
        {logos.map((logo) => (
            <div
                key={logo.id}
                className="group flex size-16 items-center justify-center rounded-xl bg-white/50 shadow transition-colors hover:bg-white/80 md:size-20"
            >
                <logo.logo className="w-10 transition-transform group-hover:scale-103 md:w-12" />
            </div>
        ))}
        <div />
    </div>
);
