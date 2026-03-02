import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Πόσο accurate είναι;",
    a: "Δεν προβλέπουμε επιτυχία. Μειώνουμε ρίσκο με structured validation και measurable experiments. Το output σε βοηθά να πάρεις data-driven αποφάσεις, δεν σου λέει 'ναι ή όχι'.",
  },
  {
    q: "Πρέπει να γράψω την ιδέα μου;",
    a: "Όχι. Μπορείς να χρησιμοποιήσεις no-idea mode / redacted inputs. Περιγράφεις constraints, αγορά, κανάλια — χωρίς να αποκαλύψεις ακριβώς τι χτίζεις.",
  },
  {
    q: "Είναι απλά ChatGPT σε ωραίο UI;",
    a: "Όχι. Είναι workflow + scoring rubric + sprint plan templates. AI είναι εργαλείο, όχι υπόσχεση. Η αξία είναι στη δομή, τα kill criteria, και τα actionable steps.",
  },
  {
    q: "Τι παίρνω τελικά;",
    a: "Risk map + sprint plan + outreach scripts + metrics + kill criteria. Εξαρτάται από το tier: Signal Check (free) δίνει βασικό risk map, Sprint Plan (Pro) δίνει πλήρες actionable plan.",
  },
  {
    q: "Γιατί να μην χρησιμοποιήσω IdeaBuddy / ValidatorAI / FounderPal / PrometAI;",
    a: "Είναι εξαιρετικά για planning/γενικά reports. Το SignalSprint είναι φτιαγμένο για solo builders που χρειάζονται decision + execution sprint με constraints. Διαφορετικό job-to-be-done.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          Συχνές ερωτήσεις
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
