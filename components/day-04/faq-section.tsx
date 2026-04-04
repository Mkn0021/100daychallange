import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Background } from "./hero-section";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";

const categories = [
    {
        title: "Support",
        questions: [
            {
                question: "How do I update my account without breaking my laptop?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
            },
            {
                question: "Is support free, or do I need to Google everything?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
            },
            {
                question: "Are you going to be subsumed by AI?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
            },
        ],
    },
    {
        title: "Your account",
        questions: [
            {
                question: "Is support free, or do I need to Google everything?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
            },
            {
                question: "Are you going to be subsumed by AI?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
            },
        ],
    },
    {
        title: "Other questions",
        questions: [
            {
                question: "Is support free, or do I need to Google everything?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
            },
            {
                question: "Are you going to be subsumed by AI?",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt officia temporibus dignissimos.",
            },
        ],
    },
];

export const FaqSection = () => (
    <Background className="rounded-none rounded-b-[36px] bg-linear-to-t">
        <Section as="div" className="grid grid-cols-1 gap-10 md:px-7.5 lg:grid-cols-2">
            <SectionHeader className="items-start">
                <SectionTitle variant="secondary">Got Questions? </SectionTitle>
                <SectionSubTitle variant="secondary" className="mb-auto justify-start text-base">
                    If you can’t find what you’re looking for,{" "}
                    <span className="underline underline-offset-4">get in touch.</span>
                </SectionSubTitle>
            </SectionHeader>
            <div className="grid gap-6 py-6.25 text-start">
                {categories.map((category, categoryIndex) => (
                    <div key={category.title}>
                        <h3 className="text-muted-foreground border-b py-4">{category.title}</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {category.questions.map((item, i) => (
                                <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                                    <AccordionTrigger className="text-foreground">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </Section>
    </Background>
);
