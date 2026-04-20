import  { useState, type ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';

// ✅ Props টাইপ define
interface FAQItemProps {
  question: string;
  children?: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

// ✅ Single FAQ Item
const FAQItem = ({ question, children, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border border-blue-200 rounded-lg mb-2 overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-blue-50 transition-colors"
        onClick={onClick}
      >
        <span className="text-[#3b82f6] font-medium text-sm md:text-base">
          {question}
        </span>

        {isOpen ? (
          <Minus className="text-[#3b82f6] w-5 h-5 flex-shrink-0" />
        ) : (
          <Plus className="text-[#3b82f6] w-5 h-5 flex-shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="p-5 bg-white border-t border-blue-100 text-gray-600 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

// ✅ Main Section
const FAQSection = () => {
  // 👉 null handle korar jonno type add
  const [openIndex, setOpenIndex] = useState<number | null>(7);

  const faqs = [
    {
      q: "I'm an international student from a Hispanic/Latino country, can I apply for the ATD scholarship?",
      a: "Yes, eligible international students from Hispanic/Latino backgrounds can apply if they meet the criteria."
    },
    {
      q: "I'm from Brazil, Belize, or other Caribbean Island, can I apply for the ATD scholarship?",
      a: "Yes, students from these regions may apply depending on eligibility requirements."
    },
    {
      q: "I'm currently enrolled in a dual program that includes taking classes at the local state college, can I apply?",
      a: "Yes, dual-enrolled students are eligible if they meet all academic and residency requirements."
    },
    {
      q: "I won the ATD in a previous year, can I reapply?",
      a: "Typically, past recipients cannot reapply, but check current rules for updates."
    },
    {
      q: "Do I need to be a member of the FCHCC in order to apply for ATD?",
      a: "Membership is encouraged but may not be mandatory."
    },
    {
      q: "If I don't have all the deliverables when filling out the application, can I complete it later?",
      a: "Yes, you can save progress and return later before the deadline."
    },
    {
      q: "How do I donate to the scholarship program?",
      a: "You can donate via the official website or contact the organization directly."
    }
  ];

  return (
    <div className="max-w-360 mx-auto p-6 my-16 bg-white border border-blue-100 rounded-2xl shadow-sm mt-10">
      <h2 className="text-center text-xl font-normal text-[#1E88E5] mb-8">
        Frequently-Asked Questions
      </h2>

      {/* 🔹 Dynamic FAQs */}
      {faqs.map((item, index) => (
        <FAQItem
          key={index}
          question={item.q}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.a}
        </FAQItem>
      ))}

      {/* 🔹 Dress Code */}
      <FAQItem
        question="What is the dress code for the ATD Luncheon?"
        isOpen={openIndex === 7}
        onClick={() => setOpenIndex(openIndex === 7 ? null : 7)}
      >
        <div className="space-y-1">
          <p className="font-normal">Business casual is the dress code. Examples are:</p>

          <ul className="list-none text-[16px] space-y-1 ml-2">
            <li>For the Men - blazers, dress shirt, jeans or slacks, tie (optional)</li>
            <li>For the Ladies - blazers, dress blouse, dress slacks, skirt or dress</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-16">
            <div className="rounded-lg overflow-hidden 0">
              <img
                src="/images/simple-outfit-idea-OOTD-pinterest 1.png"
                alt="Men fashion"
                className="w-full md:w-[564px] h-[564px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden ">
              <img
                src="/images/57123c1b9ded1ab1bb8496c7f7bd8990 1.png"
                alt="Men fashion"
                className="w-full md:w-[564px] h-[564px] object-cover"
              />
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/download 1.png"
                alt="Women fashion"
                 className="w-full md:w-[564px] h-[564px] "
              />
            </div>
            <div className="rounded-lg overflow-hidden  ">
              <img
                src="/images/20-ELEGANT-OUTFITS-WITH-JEANS-TO-WEAR-NOW-FOR-WOMEN-OVER-50 1.png"
                alt="Women fashion"
                 className="w-full md:w-[564px] h-[564px]"
              />
            </div>
          </div>
        </div>
      </FAQItem>

      {/* 🔹 Contact */}
      <FAQItem
        question="What if I have other scholarship questions?"
        isOpen={openIndex === 8}
        onClick={() => setOpenIndex(openIndex === 8 ? null : 8)}
      >
        <p>
          Please contact us at{" "}
          <span className="text-blue-500 underline cursor-pointer">
            fchcc@fchcc.com
          </span>{" "}
          or call 904-346-1118.
        </p>
      </FAQItem>
    </div>
  );
};

export default FAQSection;