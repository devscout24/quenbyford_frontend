import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DiscountPro = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: t("discount.faq.q1"),
      answer: t("discount.faq.a1")
    },
    {
      question: t("discount.faq.q2"),
      answer: t("discount.faq.a2")
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative h-142 flex items-center  overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/unsplash_HYLfpSdpFV0.png')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1e3a8a]/30"></div>

        <div className="w-full max-w-[1440px] mx-auto relative z-10 px-0 py-0 m-0 ">

          {/* Title */}
          <h1 className="text-4xl md:text-[50px] font-bold mb-8 text-white">
            <span className="text-[#60A5FA]">{t("discount.hero.title_highlight")}</span> {t("discount.hero.title")}
          </h1>

          {/* Description */}
          <p className="w-[500px] text-xl mb-12.5 font-normal leading-relaxed text-[#000]">
            <span className='text-[#1E88E5]'>{t("discount.hero.desc").split(' ')[0] + ' ' + t("discount.hero.desc").split(' ')[1] + ' ' + t("discount.hero.desc").split(' ')[2]}</span> {t("discount.hero.desc").split(' ').slice(3).join(' ')}
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">

            <span className="text-xl font-normal text-black">
              {t("discount.hero.questions")}
            </span>

          </div>

        </div>

        {/* Design Shapes */}
        <div className="absolute right-20 bottom-10 w-40 h-40 bg-white/20 rounded-full blur-md"></div>

        <div className="absolute right-10 top-20 w-64 h-24 bg-white/10 -rotate-12"></div>

      </section>


      <div className="max-w-[1440px] mx-auto  py-16">

        {/* FAQ Section */}
        <h2 className="text-[32px] font-bold text-[#3B82F6] mb-8">
          {t("discount.faq.title")}
        </h2>

        <div className="border border-[#1E88E5] rounded-lg overflow-hidden mb-15">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border-b border-blue-100 last:border-none"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex justify-between text-xl  items-center p-5 text-left font-semibold"
              >

                <span>
                  {index + 1}. {faq.question}
                </span>

                <span className="text-xl text-black">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              {openIndex === index && (

                <div className="p-5 bg-white border-t border-[#1E88E5] text-xl font-normal text-black">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>


        {/* How to Offer */}
        <h2 className="text-[32px] font-bold text-[#F97316] mb-9">
          {t("discount.how.title")}
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mb-12">

          <div className="flex-1 rounded  text-black text-xl font-normal max-w-[1008px] text-left">

            {t("discount.how.desc")}

          </div>

          <div className="w-full md:w-64 bg-[#1E88E5]/10 p-4 rounded-md text-center text-[16px] text-black font-medium">

            <p className="font-bold mb-2">
              {t("discount.how.note_title")}
            </p>

            <p>
              {t("discount.how.note_text")}
            </p>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center space-y-8">

          <p className="text-2xl font-normal text-black mb-15">
            {t("discount.cta.questions")}{" "}
            <Link
              to="/contact"
              className="text-orange-400 font-medium"
            >
              {t("discount.cta.contact")}
            </Link>
          </p>

          <Link to="https://www.emailmeform.com/builder/emf/fchcc/members-discount-program" className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-3 px-10 rounded-lg transition shadow-md ">

            {t("discount.cta.button")}

          </Link>

          <p className="text-xl text-black font-normal mb-30 mt-8">

            {t("discount.cta.portal_text")}

            <Link
              to="#"
              className="text-orange-400 ml-1"
            >
              {t("discount.cta.click_here")}
            </Link>

          </p>

        </div>

      </div>

    </div>
  );

};

export default DiscountPro;