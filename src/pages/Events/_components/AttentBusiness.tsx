import { useState } from "react";


const AttendExpoSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    console.log(setActiveTab);
  const dayData = [
    {
      day: "Day 1",
      bg: "bg-[#F97316]/20",
      content: "Conference & WorkshopsGain hands-on insights from professionals and successful business owners. Dive into topics that matter most to small and growing businesses, including marketing, legal protections, digital tools, and more."
    },
    {
      day: "Day 2",
      bg: "bg-[#1E88E5]/10",
      content: "Networking & Expo. Connect with local industry leaders, explore vendor booths, and participate in live Q&A sessions designed to scale your operations."
    }
  ];
  const testimonials = [
    {
      name: "Seba Vargas",
      role: "Attendee",
      event: "Hola Emprende 2024 Conference",
      company: "Genesis Castaneda Studio LLC",
      image: "/images/unsplash_sgZX15Da8YE.png",
      quote: "En primer lugar agradecer a los organizadores, panelistas, colaboradores y demás entidades que hicieron posible este evento. Particularmente quedo muy agradecido por haber podido recibir información privilegiada, es importante señalar el gran comportamiento de los asistentes al estar prestos para compartir experiencias y conocimientos."
    },
    // Add more testimonial objects here
  ];

  return (
  <div>
      <div className="max-w-234  mx-auto px-4 py-16">
      <h2 className="text-[32px]  font-medium text-black text-center mb-8">Attend Business Expo</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Top Row: What To Expect */}
        {dayData.map((item, index) => (
          <div key={index} className={`${item.bg} rounded-xl w-110 h-120  p-6 flex flex-col items-center shadow-sm`}>
            <h3 className="text-[32px] font-medium text-black mb-5">What To Expect</h3>
            <p className="text-2xl font-medium mb-12.5">{item.day}</p>
            <div className="bg-white h-83 rounded-2xl px-6 text-xl font-normal text-black py-3 shadow-inne r">
              {item.content}
            </div>
          </div>
        ))}

        {/* Bottom Left: Who Should Attend */}
        <div className="border border-gray-100 rounded-xl p-6 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-[32px] font-medium text-black mb-8">Who Should Attend:</h3>
            <ul className=" text-xl font-normal text-black/60 list-disc list-inside marker:text-black/60 px-2">
              <li>Entrepreneurs and small business owners</li>
              <li>Startups looking to launch or grow</li>
              <li>Professionals and students interested in business</li>
              <li>Anyone looking to connect with the local community</li>
            </ul>
          </div>
          <img 
            src="/images/Frame 2087327995.png" 
            alt="Crowded conference hall" 
            className="rounded-2xl mt-8 object-cover h-82 w-full shadow-md opacity-85 hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Bottom Right: Map Location */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            title="Schultz Center Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.123456789!2d-81.65!3d30.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE5JzEyLjAiTiA4McKwMzknMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            className="w-full h-full min-h-100"
            style={{ border: 0 }}
           
            loading="lazy"
          ></iframe>
        </div>
      </div>

      
    </div>
    <div className="max-w-7xl mx-auto h-[400px] mb-16">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6  relative overflow-hidden">
        <div className="flex flex-col md:flex-row  items-center md:items-start gap-8">
          
          {/* Profile Column */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-68 h-65 rounded-xl overflow-hidden ">
              <img 
                src={testimonials[activeTab].image} 
                alt={testimonials[activeTab].name}
                className="w-68 h-65 object-cover"
              />
            </div>
            <div>
              <h3 className="text-[32px] font-medium text-black ">
                {testimonials[activeTab].name}
              </h3>
              <div className="mt-2 text-[14px] uppercase tracking-wider text-black font-medium  space-y-1">
                <p>{testimonials[activeTab].event}</p>
                <p className="text-blue-600">{testimonials[activeTab].role}</p>
                <p>{testimonials[activeTab].company}</p>
              </div>
            </div>
          </div>

          {/* Quote Column */}
          <div className="md:col-span-2 text-center max-w-[850px] mx-auto mt-20">
            <p className="text-black/78 text-xl font-normal text-center ">
              "{testimonials[activeTab].quote}"
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
     
      </div>
    </div>
  </div>
  );
};

export default AttendExpoSection;