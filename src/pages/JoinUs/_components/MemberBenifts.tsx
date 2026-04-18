import { Link } from "react-router-dom";

const MemberBenefits = () => {
  return (
    <section className="bg-[#F97316]/10 py-20 px-4">
      <div className="max-w-360 mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-[40px] font-bold text-[#1e293b] mb-6">
          Member Benefits
        </h2>

        {/* Description Text */}
        <p className="text-[#4A5565] text-lg max-w-3xl mx-auto leading-relaxed mb-10 ">
          Check out all the benefits that come with each Membership level. It's a great 
          way to determine what membership type works best for you.
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link to="/benifits" className="bg-[#1D91E7] hover:bg-[#157dc9] text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
            Click here to view all the Member Benefits
            <span className="text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MemberBenefits;