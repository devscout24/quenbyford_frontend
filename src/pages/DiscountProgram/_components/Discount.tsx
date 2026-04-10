import { useState } from 'react';

const DiscountPro = () => {

  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "Do I need to be an FCHCC member to offer a discount?",
      answer: "You don't have to be a member to offer a discount."
    },
    {
      question: "How long does approval take?",
      answer: "Approval usually takes 3-5 business days after review."
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

       <div className="w-full max-w-7xl mx-auto relative z-10 px-0 py-0 m-0 ">
        
        {/* Title */}
        <h1 className="text-4xl md:text-[50px] font-bold mb-8 text-white">
          <span className="text-[#60A5FA]">FCHCC</span> Discount Program
        </h1>

        {/* Description */}
        <p className="w-[500px] text-xl mb-12.5 font-normal leading-relaxed text-[#000]">
          <span className='text-[#1E88E5]'>FCHCC's Members Discounts Program</span> provides positive exposure for your
          business and can add value through increased business with chamber members.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          <span className="text-xl font-normal text-black">
            Questions about this program?
          </span>

        </div>

      </div>

        {/* Design Shapes */}
        <div className="absolute right-20 bottom-10 w-40 h-40 bg-white/20 rounded-full blur-md"></div>

        <div className="absolute right-10 top-20 w-64 h-24 bg-white/10 -rotate-12"></div>

      </section>


      <div className="max-w-7xl mx-auto  py-16">

        {/* FAQ Section */}
        <h2 className="text-[32px] font-bold text-[#3B82F6] mb-8">
          Frequently-Asked Questions
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
                className="w-full flex justify-between text-xl font-semibold items-center p-5 text-left font-semibold"
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
          How to Offer a Member Discount
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mb-12">

          <div className="flex-1 rounded  text-black text-xl font-normal max-w-[1008px] text-left">

            To offer a member discount and prevent delays, we ask that you
            complete the member discount form in its entirety. You can upload
            your logo and/or banner ad. After we receive your application,
            the Board will review your discount. If approved, our staff will
            notify you and publish your offer.

          </div>

          <div className="w-full md:w-64 bg-[#1E88E5]/10 p-4 rounded-md text-center text-[16px] text-black font-medium">

            <p className="font-bold mb-2">
              NOTE:
            </p>

            <p>
              Businesses may request to offer a member discount. The chamber
              reserves the right to refuse any request. Benefits expire after
              one year.
            </p>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center space-y-8">

          <p className="text-2xl font-normal text-black mb-15">
            Any more questions? feel free to{" "}
            <a
              href="#"
              className="text-orange-400 font-medium"
            >
              contact us!
            </a>
          </p>

          <button className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-3 px-10 rounded-lg transition shadow-md ">

            Submit a Discount

          </button>

          <p className="text-xl text-black font-normal mb-30">

            To view current discounts, log in to the Members Only Portal →

            <a
              href="#"
              className="text-orange-400 ml-1"
            >
              click here!
            </a>

          </p>

        </div>

      </div>

    </div>
  );

};

export default DiscountPro;