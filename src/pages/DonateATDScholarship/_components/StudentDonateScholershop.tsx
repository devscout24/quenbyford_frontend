
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';


export default function StudentDonationSection() {

    const printSectionRef = useRef<HTMLDivElement>(null);



  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const link = document.createElement('a');
    link.href = '/donate-form.pdf'; 
    link.download = 'FCHCC_Donation_Form.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="py-16 bg-gray-50 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-300 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-16 text-center space-y-8"
      >
        {/* Top Icon */}
        <div className="flex justify-center">
          <div className="text-[#FF7A00]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M12.52 42.7756H12C10.114 42.7756 9.172 42.7756 8.586 42.1896C8 41.6076 8 40.6636 8 38.7776V36.5536C8 35.5176 8 34.9996 8.266 34.5356C8.532 34.0716 8.934 33.8396 9.738 33.3716C15.03 30.2936 22.544 28.5616 27.558 31.5516C27.8953 31.7529 28.1953 31.9982 28.458 32.2876C28.7271 32.5817 28.9345 32.9268 29.0678 33.3025C29.2011 33.6782 29.2577 34.0769 29.2342 34.4748C29.2107 34.8728 29.1076 35.262 28.931 35.6194C28.7544 35.9768 28.5079 36.2952 28.206 36.5556C27.9655 36.7839 27.6721 36.9488 27.352 37.0356C27.592 37.0076 27.822 36.9762 28.042 36.9416C29.864 36.6516 31.394 35.6756 32.794 34.6176L36.41 31.8876C37.0555 31.4192 37.8325 31.167 38.63 31.167C39.4275 31.167 40.2045 31.4192 40.85 31.8876C41.996 32.7536 42.348 34.1796 41.622 35.3436C40.776 36.6996 39.584 38.4336 38.44 39.4936C37.296 40.5536 35.588 41.5016 34.196 42.1736C32.652 42.9196 30.948 43.3476 29.214 43.6296C25.698 44.1976 22.034 44.1096 18.554 43.3936C16.5686 42.9849 14.547 42.7765 12.52 42.7756ZM13.172 5.17157C12.438 5.90557 12.164 6.91757 12.062 8.49957C13.2344 8.48352 14.3542 8.01052 15.1831 7.18126C16.012 6.35199 16.4845 5.23196 16.5 4.05957C14.92 4.16357 13.906 4.43757 13.172 5.17157ZM34.828 5.17157C34.094 4.43757 33.082 4.16357 31.5 4.06157C31.5161 5.23395 31.989 6.35377 32.8183 7.18266C33.6476 8.01155 34.7676 8.48405 35.94 8.49957C35.836 6.91957 35.562 5.90557 34.828 5.17157ZM34.828 18.8276C34.094 19.5616 33.082 19.8356 31.5 19.9376C31.5161 18.7652 31.989 17.6454 32.8183 16.8165C33.6476 15.9876 34.7676 15.5151 35.94 15.4996C35.836 17.0796 35.562 18.0936 34.828 18.8276ZM13.172 18.8276C13.906 19.5616 14.918 19.8356 16.5 19.9376C16.4839 18.7652 16.0109 17.6454 15.1817 16.8165C14.3524 15.9876 13.2324 15.5151 12.06 15.4996C12.164 17.0796 12.438 18.0936 13.172 18.8276Z" fill="#F97316"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.5C13.9891 11.5 15.8968 10.7098 17.3033 9.3033C18.7098 7.89678 19.5 5.98912 19.5 4H28.5C28.5 5.98912 29.2902 7.89678 30.6967 9.3033C32.1032 10.7098 34.0109 11.5 36 11.5V12.5C34.0109 12.5 32.1032 13.2902 30.6967 14.6967C29.2902 16.1032 28.5 18.0109 28.5 20H19.5C19.5 18.0109 18.7098 16.1032 17.3033 14.6967C15.8968 13.2902 13.9891 12.5 12 12.5V11.5ZM24 14C24.5304 14 25.0391 13.7893 25.4142 13.4142C25.7893 13.0391 26 12.5304 26 12C26 11.4696 25.7893 10.9609 25.4142 10.5858C25.0391 10.2107 24.5304 10 24 10C23.4696 10 22.9609 10.2107 22.5858 10.5858C22.2107 10.9609 22 11.4696 22 12C22 12.5304 22.2107 13.0391 22.5858 13.4142C22.9609 13.7893 23.4696 14 24 14Z" fill="#F97316"/>
</svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[#FF7A00] text-3xl md:text-[40px] font-bold">
          Donate to the ATD Scholarship Program
        </h2>

        {/* Main Text Content */}
        <div className="space-y-5 text-[#000000] text-base   max-w-3xl mx-auto text-left">
          <p>
            The work of the FCHCC and its 501(c)(3) Community Development Fund are made possible through contributions from individuals, groups and organizations.
          </p>
          <p>
            Help us continue to provide support and programs for Hispanics and our community by making a donation to the FCHCC's 501(c)(3) Community Development Fund today.
          </p>
          <p>
            Donations of $50 or more will include you in the FCHCC's <span className="text-[#FF7A00] italic font-medium">Circle of Friends</span>. We honor our Circle of Friends donors in our ongoing communications and at special events. Any gift makes a difference!
          </p>
          <p className="text-xs md:text-base text-black">
            Gifts to the FCHCC's 501(c)(3) Community Development Fund are tax-deductible to the extent allowed by law. IRS regulations require that you retain a written acknowledgement from the FCHCC to support claims of a tax deduction. A receipt of any gifts will be provided. If you want to donate more than $1,000, send an email to <a href="mailto:fchcc@fchcc.com" className="text-[#FF7A00] underline">fchcc@fchcc.com</a> or call (904) 346-1118.
          </p>
        </div>

        {/* Action Button  //https://www.emailmeform.com/builder/emf/fchcc/atd-donate*/}
    <div className="pt-4">
        
            <Link to="/donate" 
           
            className="bg-[#FF7A00] text-white px-10 py-3 rounded-xl font-bold text-lg shadow-md hover:bg-[#e66e00] transition-colors"
          >
            Donate Now
          </Link>
        </div>

        {/* Footer Links & Info Section */}
        <div 
          ref={printSectionRef} 
          className="space-y-4 pt-8 border-t border-gray-100 mt-8 scroll-mt-10"
        >
          <p className="text-[#64748B] text-sm">
            Or you may download and 
            <button 
              onClick={handleDownload}
              className="text-[#258AFF] underline ml-1 font-medium hover:text-blue-700"
            >
              print our donation form
            </button>.  <br />
            You can then mail it in with a check to: 
          </p>
          
          <div className="text-[#64748B] font-medium text-sm">
            <p>FCHCC Community Development, Inc</p> [cite: 8]
            <p>P.O. Box 57972</p> 
            <p>Jacksonville, FL 32241</p> 
          </div>
        </div>
      </motion.div>
    </section>
  );
}