import React from "react";
import {
    Section,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import { BuddleIllustration } from "./ui/illustration";

export const Testimonial = () => (
    <Section>
        <SectionHeader>
            <SectionTitle>Testimonial</SectionTitle>
            <SectionSubTitle>
                Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our
                Digital Marketing Services
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent className="bg-accent rounded-[45px] py-21 grid grid-cols-[300px_600px_600px] gap-10 overflow-hidden">
            <div className="flex flex-col items-center -translate-x-37">
                <Bubble>
                    We have been working with Positivus for the past year and have seen a
                    significant increase in website traffic and leads as a result of their efforts.
                    The team is professional, responsive, and truly cares about the success of our
                    business. We highly recommend Positivus to any company looking to grow their
                    online presence.
                </Bubble>
                <p className="text-[20px] text-white text-left mt-10">
                    <strong className="block text-primary">John Smith</strong>
                    Marketing Director at XYZ Corp
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Bubble>
                    We have been working with Positivus for the past year and have seen a
                    significant increase in website traffic and leads as a result of their efforts.
                    The team is professional, responsive, and truly cares about the success of our
                    business. We highly recommend Positivus to any company looking to grow their
                    online presence.
                </Bubble>
                <p className="text-[20px] text-white text-left mt-10">
                    <strong className="block text-primary">John Smith</strong>
                    Marketing Director at XYZ Corp
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Bubble>
                    We have been working with Positivus for the past year and have seen a
                    significant increase in website traffic and leads as a result of their efforts.
                    The team is professional, responsive, and truly cares about the success of our
                    business. We highly recommend Positivus to any company looking to grow their
                    online presence.
                </Bubble>
                <p className="text-[20px] text-white text-left mt-10">
                    <strong className="block text-primary">John Smith</strong>
                    Marketing Director at XYZ Corp
                </p>
            </div>
        </SectionContent>
    </Section>
);

const Bubble = ({ children }: { children?: React.ReactNode }) => (
    <div className="relative w-150 aspect-606/266">
        <BuddleIllustration />
        <div className="absolute inset-0 flex items-center justify-center mb-8">
            <p className="text-white text-center text-sm leading-relaxed px-13">{children}</p>
        </div>
    </div>
);
