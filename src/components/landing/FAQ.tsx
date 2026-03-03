import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this just ChatGPT?",
    a: "No. It is a deterministic engine with enforced thresholds and hard kill logic.",
  },
  {
    q: "Can I continue if the engine says KILL?",
    a: "No. That is the point.",
  },
  {
    q: "Do I need to reveal my idea?",
    a: "No. Privacy-first, redacted mode supported.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
