import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqs = [
  {
    question: "What is Campers Shop?",
    answer:
      "Campers Shop is your go-to store for all camping gear and accessories.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support at support@campersshop.com.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on all items.",
  },
  // Add more FAQs as needed
];

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
          value={index.toString()}
            key={index}
            className="border border-gray-200 rounded-lg"
          >
            <AccordionTrigger className="p-4 bg-gray-100 hover:bg-gray-200">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-white">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
