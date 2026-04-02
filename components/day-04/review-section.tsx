import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowIcon, ArrowIcon2 } from "./ui/icons";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";
import { DashedBorder } from "./hero-section";

const reviews = [
    {
        name: "Sarah Chen, Director",
        title: "Creative Minds Inc",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=cover",
        review: "The team collaboration features are absolutely game-changing for us.",
    },
    {
        name: "Marcus Johnson, Lead",
        title: "DataFlow Systems",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=cover",
        review: "Saved us countless hours managing projects and tracking progress.",
    },
    {
        name: "Elena Rodriguez, Founder",
        title: "Growth Partners",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=cover",
        review: "Exceptional platform that scales beautifully with our growing team.",
    },
];

export const ReviewSection = () => {
    return (
        <Section className="relative mt-22.5 pb-17.5">
            <SectionHeader className="items-start gap-4.5">
                <SectionTitle variant="secondary">Trusted by product builders</SectionTitle>
                <SectionSubTitle variant="secondary">
                    Mainline is built on the habits that make the best product teams successful:
                    staying focused, moving quickly, and always aiming for high-quality work.
                </SectionSubTitle>
                <Button variant="outline">
                    Read our Customer Stories <ArrowIcon />
                </Button>
            </SectionHeader>

            <div className="mt-20 mb-8.25 flex gap-5.75">
                {reviews.map((review) => (
                    <ReviewCard {...review} key={review.name} />
                ))}
            </div>
            <div className="flex gap-3 *:rounded-full *:border *:border-(--border) *:bg-(--muted) *:p-2.75">
                <button>
                    <ArrowIcon2 className="h-9 rotate-180" />
                </button>
                <button>
                    <ArrowIcon2 className="h-9" />
                </button>
            </div>
            <DashedBorder variant="vertical" className="absolute inset-x-0 bottom-0" />
        </Section>
    );
};

const ReviewCard = ({ name, title, image, review }: (typeof reviews)[0]) => (
    <div
        className="flex aspect-378/525 w-95 flex-col overflow-hidden rounded-[9px] bg-(--muted)"
        key={title}
    >
        <div className="relative flex-1">
            <Image src={image} alt={name} fill className="h-full w-full object-cover object-top" />
        </div>
        <div className="flex h-50 flex-col justify-between gap-5 px-6 pt-5 pb-3.75">
            <SectionTitle
                as="h4"
                variant="secondary"
                className="font-medium tracking-normal md:text-[24px]"
            >
                {review}
            </SectionTitle>
            <p className="text-foreground text-[15px] leading-[140%] font-semibold">
                {name}
                <span className="mt-0.75 block text-[13px] font-normal text-(--muted-foreground)">
                    {title}
                </span>
            </p>
        </div>
    </div>
);
