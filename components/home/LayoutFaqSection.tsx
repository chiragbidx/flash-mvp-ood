import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeContent } from "@/content/home";

const { faq } = homeContent;

export const LayoutFaqSection = () => {
  return (
    <section id="faq" className="container mx-auto md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg badge-green-gradient font-semibold text-center mb-2 tracking-wider rounded px-3 py-1">
          {faq.eyebrow}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold text-primary">
          {faq.heading}
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {faq.items.map(({ question, answer }, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left text-primary">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-foreground">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};