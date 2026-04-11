
import { ArrowUpRight } from 'lucide-react';

const SpeakersSponsors = () => {
  const speakers = [1, 2, 3, 4, 5]; // Placeholder for speaker data/images

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
      
      {/* Speakers Section */}
      <div className="bg-blue-50 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-[#1D83E4] mx-auto md:ml-auto md:translate-x-12">
            Meet Our Speakers
          </h2>
          <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-blue-300 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-sm font-medium">
            View All <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable/Grid Speaker List */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {speakers.map((_, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-blue-400 transition-all shadow-md">
                <img 
                  src="/api/placeholder/300/300" 
                  alt={`Speaker ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Optional: Add text labels here if not using baked-in graphics */}
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full text-sm">
            View All <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="text-center space-y-8">
        <h3 className="text-xl font-medium text-gray-500">Supported by:</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          <img 
            src="/api/placeholder/200/60" 
            alt="Bank of America" 
            className="h-12 md:h-16 object-contain"
          />
          <img 
            src="/api/placeholder/120/120" 
            alt="City Logo" 
            className="h-20 md:h-24 object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default SpeakersSponsors;