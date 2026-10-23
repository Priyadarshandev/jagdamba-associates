import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div role="list">
      {items.map((item, index) => (
        <div key={index} className="faq-item" role="listitem">
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <span>{item.question}</span>
            {openIndex === index ? (
              <ChevronUp size={18} className="shrink-0 text-[#B6A797]" aria-hidden="true" />
            ) : (
              <ChevronDown size={18} className="shrink-0 text-[#B6A797]" aria-hidden="true" />
            )}
          </button>
          {openIndex === index && (
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
