import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Container } from "./hero-section";
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
    <Container className="rounded-none rounded-b-[36px] bg-linear-to-t">
        <Section className="grid grid-cols-2 py-28.25">
            <SectionHeader className="items-start gap-5.5">
                <SectionTitle variant="secondary">Got Questions? </SectionTitle>
                <SectionSubTitle variant="secondary" className="mb-auto justify-start text-[15px]">
                    If you can’t find what you’re looking for,{" "}
                    <span className="underline underline-offset-4">get in touch.</span>
                </SectionSubTitle>
            </SectionHeader>
            <div className="grid gap-6 text-start">
                {categories.map((category, categoryIndex) => (
                    <div key={category.title} className="">
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
    </Container>
);
