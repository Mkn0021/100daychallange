import { Button } from "./ui/button";
import { CheckBox, FormInput, TextArea } from "./ui/form-input";
import { ContactUsImage } from "./ui/illustration";
import {
    Section,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";

export const ContactUs = () => (
    <Section>
        <SectionHeader>
            <SectionTitle>Contact Us</SectionTitle>
            <SectionSubTitle>
                Connect with Us: Let's Discuss Your Digital Marketing Needs
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent className="bg-secondary flex items-center justify-between gap-10 overflow-hidden rounded-[45px] px-8 py-12 sm:px-25 sm:py-15">
            <ContactForm />
            <ContactUsImage />
        </SectionContent>
    </Section>
);

const ContactForm = () => (
    <form className="flex w-full flex-col justify-between gap-10 lg:w-130">
        <div className="flex items-center gap-8.75">
            <CheckBox name="inquiryType" value="say-hi" defaultChecked label="Say Hi" />
            <CheckBox name="inquiryType" value="quote" label="Get a Quote" />
        </div>
        <FormInput type="text" name="name" placeholder="Name" label="Name" />
        <FormInput type="email" name="email" placeholder="Email" label="Email" />
        <TextArea name="message" placeholder="Message" label="Message" />
        <Button className="w-full" type="submit">
            Send Message
        </Button>
    </form>
);
