
import { Crown } from 'lucide-react';

const CorporateMemberJob = () => {
  return (
    <section className="my-15 bg-white">
      <div className="max-w-360 mx-auto px-4 text-center">
        
        {/* Header Section */}
        <h2 className="text-[50px] font-bold text-black mb-6">
          FCHCC Corporate Members
        </h2>
        <p className="text-black text-2xl mb-12 max-w-7xl mx-auto">
          Submit your Job Listings FREE (applies to Membership levels of Non-profit #1 through Strategic Partner)
        </p>

        {/* Free Pricing Card */}
        <div className="flex justify-center mb-12  ">
          <div className="bg-white border-2 border-[#FF781F] rounded-xl p-8 w-full max-w-100  shadow-2xl shadow-orange-100 flex flex-col items-start transition-transform hover:scale-105">
            
            {/* Orange Icon Box */}
            <div className="bg-[#FF781F] p-3 rounded-xl mb-6 shadow-md">
              <Crown size={28} className="text-white" />
            </div>

            {/* Text Content */}
            <h3 className="text-3xl font-bold text-black my-5">Corporate Member</h3>
            <p className="text-[#0A0A0A]/60 text-lg mb-8">website and social media</p>

            {/* Price (Free) */}
            <div className="w-full text-left border-t border-gray-100 pt-6 mb-8">
              <span className="text-4xl font-extrabold text-[#FF781F]">$0</span>
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#FF781F] hover:bg-[#e66a1a] text-white py-3.5 rounded-2xl font-bold text-sm transition-colors shadow-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="space-y-6">
          <p className= "text-xl text-black font-normal">
            Please allow up to 48 hours for your listing to be posted.
          </p>
          <p className="text-black text-sm max-w-3xl mx-auto leading-relaxed">
            If you have any questions, please contact <span className="font-semibold text-gray-800">Kim McDougal</span>, Vice President of Interactive Communications <br className="hidden md:block" />
            at <a href="mailto:interactivecomm@fchcc.com" className="text-blue-600 hover:underline">interactivecomm@fchcc.com</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CorporateMemberJob;