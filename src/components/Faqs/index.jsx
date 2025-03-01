'use client'
import { useState } from "react";

const faqs = [
  {
    question: "How do I get started with Headspace?",
    answer:
      "Simply sign up for a free account, and you'll get access to a library of beginner-friendly meditations and mindfulness exercises.",
  },
  {
    question: "Can I use Headspace offline?",
    answer:"Simply sign up for a free account, and you'll get access to a library of beginner-friendly meditations and mindfulness exercises.",
  },
  {
    question: "Is there a free version of Headspace?",
    answer:"Simply sign up for a free account, and you'll get access to a library of beginner-friendly meditations and mindfulness exercises.",
  },
  {
    question: "How does the personalized meditation plan work?",
    answer:"Simply sign up for a free account, and you'll get access to a library of beginner-friendly meditations and mindfulness exercises.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:"Simply sign up for a free account, and you'll get access to a library of beginner-friendly meditations and mindfulness exercises.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center py-16 px-6">
      <span className="bg-blue text-pink px-3 py-1 rounded-md text-sm">FAQ</span>
      <h2 className="text-3xl font-bold mt-4">Your Questions Answered</h2>
      <p className="text-gray-500 mt-2 text-center max-w-3xl">
        Find answers to the most common questions about our services and how to make the most of Headspace.
      </p>

      <div className="mt-6 w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 flex justify-between items-center font-medium text-lg"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="text-gray-600 pb-4">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
