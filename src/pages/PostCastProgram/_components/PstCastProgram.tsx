

const PodcastProgram = () => {
  return (
    <div className="max-w-7xl mx-auto  py-15 bg-white font-sans text-center">
      
      {/* Podcast Logo */}
      <div className="flex justify-center mb-10">
        <img 
          src="/images/PasCat.png" 
          alt="Poscast Logo" 
          className="h-23 object-contain"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-[50px] font-bold mb-8 tracking-tight">
        <span className="text-blue-500">FCHCC</span> Monthly Podcast Program
      </h1>

      {/* Hosts Section */}
      <div className="max-w-[700px] mx-auto mb-14 text-[#000000] text-lg font-normal">
        <p className="">
         With hosts: Monica Hernandez, FCHCC President Sheifalika Bhatnagar, CMG Cox Media Group Maria Isabel Montoya  MiAddvantage
        </p>
      </div>

      {/* Main Description Body */}
      <div className="max-w-7xl mx-auto space-y-8 text-[#000000] text-lg font-normal leading-relaxed text-left md:text-left">
        <p>
          FCHCC's Business & Culture Podcast is a space to celebrate multiculturalism and diversity as the first podcast of its kind from a Hispanic Chamber of Commerce in Florida!
        </p>

        <p>
          We share topics of interest including: business, events, hot topics, art, and culture. Follow us on <a href="#" className="text-[#1E88E5] hover:underline">Social Media</a> to listen in on the next episode! The Podcast airs the first Saturday of each month on 104.5 WOKV Jacksonville News and Talk.
        </p>

        <p>
          Our podcast is the another initiative of our chamber to assist our corporate members and show the impact of Hispanic culture on the Northeast Florida community.
        </p>

        {/* Requirements Section */}
        <div className="">
          <p className="font-bold ">To be considered for a guest spot, please note:</p>
          <ul className="inline-block text-left list-disc pl-6 space-y-2">
            <li>
              You must be an FCHCC Platinum chamber (Membership level Large Corporation #2 up to Strategic Partner) in good standing.
            </li>
            <li>
              Your company/business positively impacts your community.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16">
        <button className="bg-[#F2741F] hover:bg-[#d96316] text-white font-bold py-3.5 px-12 rounded-xl text-lg transition-all shadow-md active:scale-95">
          Request a guest spot
        </button>
      </div>

    </div>
  );
};

export default PodcastProgram;