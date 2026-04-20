
import { motion } from 'framer-motion';

export default function ScholarshipProgram() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-360 ">
        <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <h2 className="text-[#1E88E5] text-3xl md:text-[40px] font-bold leading-tight text-center w-full md:w-[600px] mx-auto pb-4">
              What is the ATD Scholarship Program?
            </h2>
            
            <div className="space-y-4 text-[#000000] text-base leading-relaxed font-normal">
              <p>
                Our Achieving the Dream Scholarship provides financial support to outstanding Hispanic students in Northeast Florida, helping them reach their academic and career aspirations!
              </p>
              <p>
                The First Coast Hispanic Chamber of Commerce (FCHCC), along with our donors, awards promising Hispanic students scholarships to continue their education. Each year, FCHCC awards between 10 - 12 scholarships to deserving Hispanic students and recognizes them at our Annual ATD Awards Luncheon.
              </p>
              <p>
                To qualify, students must be of Hispanic/Latino descent, live in one of the First Coast five counties, have a 3.0 GPA, complete an application which includes two short essays, and send official transcripts for our selection committee to review and select the recipients.
              </p>
              <p>
                The winning students will be formally awarded at the Annual Achieving the Dream luncheon. FCHCC is very proud of all our applicants and would like to add you to our list of recipients!
              </p>
            </div>
          </motion.div>

          {/* Right Side: Image Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl ">
              {/* Image with the text "Achieving the Dream" integrated */}
              <img 
                src="/images/DonateATDScholarship.png" 
                alt="Achieving the Dream Student" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Optional Overlay if you want to recreate the yellow/blue accent via CSS */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                 {/* CSS Shapes can be added here if not part of the image */}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}