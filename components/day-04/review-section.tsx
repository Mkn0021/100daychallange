import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowIcon } from "./ui/icons";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";
import { DashedBorder } from "./hero-section";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const items = [
    {
        quote: "We're misusing Mainline as a CRM and it still works!",
        author: "Amy Chase",
        role: "PM",
        company: "Mercury Finance",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&crop=faces&fit=crop",
    },
    {
        quote: "I was able to replace 80% of my team with Mainline bots.",
        author: "Jonas Kotara",
        role: "Lead Engineer",
        company: "Mercury Finance",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&crop=faces&fit=crop",
    },
    {
        quote: "Founder Mode is hard enough without having a really nice PM app.",
        author: "Kevin Yam",
        role: "Founder",
        company: "Mercury Finance",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&crop=faces&fit=crop",
    },
    {
        quote: "I can use the tool as a substitute from my PM.",
        author: "Kundo Marta",
        role: "Founder",
        company: "Mercury Finance",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&crop=faces&fit=crop",
    },
    {
        quote: "We're misusing Mainline as a CRM and it still works!",
        author: "Amy Chase",
        role: "PM",
        company: "Mercury Finance",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&crop=faces&fit=crop",
    },
    {
        quote: "I was able to replace 80% of my team with Mainline bots.",
        author: "Jonas Kotara",
        role: "Lead Engineer",
        company: "Mercury Finance",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&crop=faces&fit=crop",
    },
    {
        quote: "Founder Mode is hard enough without having a really nice PM app.",
        author: "Kevin Yam",
        role: "Founder",
        company: "Mercury Finance",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&crop=faces&fit=crop",
    },
    {
        quote: "I can use the tool as a substitute from my PM.",
        author: "Kundo Marta",
        role: "Founder",
        company: "Mercury Finance",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&crop=faces&fit=crop",
    },
];

export const ReviewSection = () => {
    return (
        <Section className="relative mt-22.5 pb-17.5">
            <SectionHeader className="items-start">
                <SectionTitle variant="secondary">Trusted by product builders</SectionTitle>
                <SectionSubTitle variant="secondary">
                    Mainline is built on the habits that make the best product teams successful:
                    staying focused, moving quickly, and always aiming for high-quality work.
                </SectionSubTitle>
                <Button variant="outline">
                    Read our Customer Stories <ArrowIcon />
                </Button>
            </SectionHeader>

            <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {items.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className="grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%]"
                            >
                                <Card className="bg-muted h-full overflow-hidden rounded-[9px] border-none ring-0 p-0">
                                    <CardContent className="flex h-full flex-col p-0">
                                        <div className="relative h-72 lg:h-82">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                                            <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                                                {testimonial.quote}
                                            </blockquote>
                                            <div className="space-y-0.5">
                                                <div className="text-primary font-semibold">
                                                    {testimonial.author}, {testimonial.role}
                                                </div>
                                                <div className="text-muted-foreground text-sm">
                                                    {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-8 flex gap-3">
                        <CarouselPrevious className="bg-muted hover:bg-muted/80 [&>svg]:text-muted-foreground static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8!" />
                        <CarouselNext className="bg-muted hover:bg-muted/80 [&>svg]:text-muted-foreground static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8!" />
                    </div>
                </Carousel>
            </div>
            <DashedBorder variant="vertical" className="absolute inset-x-0 bottom-0" />
        </Section>
    );
};
