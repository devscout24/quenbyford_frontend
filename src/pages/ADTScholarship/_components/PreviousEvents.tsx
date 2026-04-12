import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GrDownload } from "react-icons/gr";
import { motion } from "framer-motion";

const eventData = {
  title: "Previous Events",
  date: "MAY 16, 2025",
  description:
    "Join us for a special luncheon celebrating dedication, growth and the pursuit of knowledge at Achieving the Dream 2025 luncheon! It's a day to recognize outstanding individuals and their journey toward success.",
  keynote: "Dr. Moez Limayem, UNF President",
  status: "EVENT SOLD OUT!\n Achieving the Dream Scholarship Luncheon",

  mc: {
    name: "Tenikka Hughes ",
    role: "Anchor, CBS 47 & FOX 30 News Jax",
    bio: "Tenikka Hughes is a three-time Emmy Award-winning evening anchor with CBS47 & FOX30 Action News Jax. She was born and raised in North Carolina and has worked in television news for nearly 20 years with stops in Charlotte, Memphis and Macon.Tenikka is a well-respected journalist, known for her authenticity, compelling storytelling and compassion for others. She also mentors young journalists across the country. \nTenikka has a heart for children – spending countless hours reading to kids and promoting the importance of literacy and education. She is also the driving force behind “Tenikka’s Books for Kids,”\n an annual book collection drive that has put nearly 30,000 free books in the hands of local children, in partnership with the Jacksonville Public Library. Tenikka graduated summa cum laude with an undergraduate degree in Mass Communications from Benedict College, an HBCU in Columbia, South Carolina.\n She also earned a Master of Journalism from the University of Maryland at College Park. Tenikka enjoys traveling and discovering great restaurants with her husband. ",
    image: "/images/Tenikka-Hughes-488x600 1.png",
  },
};

const data = {
  date: "MAY 16, 2026",
  time: "11:00AM - 2:00PM",
  locationName: "Florida Blue",
  address: "4800 Deerwood Campus Parkway",
  memberPrice: 60,
  nonMemberPrice: 80,
  isSoldOut: true,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PreviousEvents() {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-12 bg-white text-center"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Header */}
      <motion.h2
        className="text-[#F97316] text-[40px] font-bold mb-4 uppercase tracking-wide"
        variants={fadeInUp}
      >
        {eventData.title}
      </motion.h2>

      {/* Event Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        <div className="">
          <img
            src="/images/Dr-Moez-Limayem-UNF-President-speaker-for-ATD-1024x1024 1.png"
            alt="Event Poster"
            className="shadow-xl rounded-sm  w-100 h-100 object-cover"
          />
        </div>

        <div className=" w-175 ">
          <h3 className="text-[40px] font-medium text-black mb-10">
            {eventData.date}
          </h3>
          <p className="text-black text-[16px] font-normal mb-8">{eventData.description}</p>
          <p className="font-medium text-black text-xl ">
            with Keynote Speaker: {eventData.keynote}
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="mb-16">
        <h4 className="text-[32px] font-medium uppercase whitespace-pre-line">
          {eventData.status}
        </h4>
        <p className="text-black text-[24px] font-normal mt-4">
          Read our  {" "}
          <a href="#" className="text-[#1E88E5] hover:underline">
            Press Release
          </a>
          <span>    announcing the Winners of the 2025 ATD Scholarship!</span>
        </p>
      </div>

      {/* MC Section */}
      <div className="bg-[#F4F2F7] rounded-[40px] max-w7xl h-100 flex flex-col md:flex-row items-center mb-10 shadow-sm px-25">
        <div className="p-10 text-left flex-1">
          <h5 className="text-[#1E88E5] text-2xl md:text-[40px] font-medium mb-8">
            Master of Ceremony
          </h5>
          <h3 className="text-2xl font-normal text-black md:text-[32px] ">
            {eventData.mc.name}, {eventData.mc.role}
          </h3>
        </div>

        <div className="flex-1 flex justify-end">
          <img
            src={eventData.mc.image}
            alt="MC"
            className=""
          />
        </div>
      </div>

      {/* Bio */}
      <p className="text-left text-xl text-black mb-16 whitespace-pre-line">
        {eventData.mc.bio}
      </p>

      {/* Sponsorship */}
      <div className="space-y-8 mb-16">
        <h3 className="text-[24px] font-medium text-black">
          Sponsorship opportunities are available!
        </h3>

        <p className="uppercase text-black text-[24px] font-medium">
          Download our packet here:
        </p>
<div className="flex justify-center">
  <Button
    variant="ghost"
    className="h-20 w-20 rounded-full border-2 flex items-center justify-center"
  >
    <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-2xl">
      <GrDownload className="w-10 h-10 text-[#F97316]" />
    </div>
  </Button>
</div>
      </div>

      {/* Event Card */}
      <Card className="max-w-7xl mx-auto border border-[#F97316] shadow-lg">
        <CardContent className="p-8">

          <div className="grid md:grid-cols-2 gap-8 text-left">

            {/* Left */}
            <div className="space-y-6">
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_546_5899)">
                    <path d="M21.75 24H2.25C1.005 24 0 22.995 0 21.75V3.75C0 2.505 1.005 1.5 2.25 1.5H21.75C22.995 1.5 24 2.505 24 3.75V21.75C24 22.995 22.995 24 21.75 24ZM2.25 3C1.83 3 1.5 3.33 1.5 3.75V21.75C1.5 22.17 1.83 22.5 2.25 22.5H21.75C22.17 22.5 22.5 22.17 22.5 21.75V3.75C22.5 3.33 22.17 3 21.75 3H2.25Z" fill="black" fill-opacity="0.5" />
                    <path d="M6.75 6C6.33 6 6 5.67 6 5.25V0.75C6 0.33 6.33 0 6.75 0C7.17 0 7.5 0.33 7.5 0.75V5.25C7.5 5.67 7.17 6 6.75 6ZM17.25 6C16.83 6 16.5 5.67 16.5 5.25V0.75C16.5 0.33 16.83 0 17.25 0C17.67 0 18 0.33 18 0.75V5.25C18 5.67 17.67 6 17.25 6ZM23.25 9H0.75C0.33 9 0 8.67 0 8.25C0 7.83 0.33 7.5 0.75 7.5H23.25C23.67 7.5 24 7.83 24 8.25C24 8.67 23.67 9 23.25 9Z" fill="black" fill-opacity="0.5" />
                  </g>
                  <defs>
                    <clipPath id="clip0_546_5899">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="text-xl text-black/50 mb-2">Date</p>
                  <p className="font-bold text-2xl">{data.date}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 10C16 7.79 14.21 6 12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10ZM10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10Z" fill="black" fill-opacity="0.5" />
                  <path d="M11.4201 21.81C11.5901 21.93 11.8001 22 12.0001 22C12.2001 22 12.4101 21.94 12.5801 21.81C12.8801 21.59 20.0301 16.44 20.0001 9.98999C20.0001 5.57999 16.4101 1.98999 12.0001 1.98999C7.59009 1.98999 4.00009 5.57999 4.00009 9.98999C3.97009 16.43 11.1201 21.59 11.4201 21.81ZM12.0001 3.99999C15.3101 3.99999 18.0001 6.68999 18.0001 9.99999C18.0201 14.44 13.6101 18.43 12.0001 19.74C10.3901 18.43 5.98009 14.45 6.00009 9.99999C6.00009 6.68999 8.69009 3.99999 12.0001 3.99999Z" fill="black" fill-opacity="0.5" />
                </svg>
                <div>
                  <p className="text-xl text-black/50 mb-2">Location</p>
                  <p className="font-medium text-2xl">{data.locationName}</p>
                  <p className="text-xl text-black/50 font-normal mt-1">{data.address}</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 6C12.2449 6.00003 12.4813 6.08996 12.6644 6.25272C12.8474 6.41547 12.9643 6.63975 12.993 6.883L13 7V11.586L15.707 14.293C15.8863 14.473 15.9905 14.7144 15.9982 14.9684C16.006 15.2223 15.9168 15.4697 15.7488 15.6603C15.5807 15.8508 15.3464 15.9703 15.0935 15.9944C14.8406 16.0185 14.588 15.9454 14.387 15.79L14.293 15.707L11.293 12.707C11.1376 12.5514 11.0378 12.349 11.009 12.131L11 12V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6Z" fill="black" fill-opacity="0.5" />
                </svg>
                <div>
                  <p className="text-xl text-black/50 mb-2">Time</p>
                  <p className="font-medium text-2xl">{data.time}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 5V7M13 17V19M13 11V13M2 9C2.79565 9 3.55871 9.31607 4.12132 9.87868C4.68393 10.4413 5 11.2044 5 12C5 12.7957 4.68393 13.5587 4.12132 14.1213C3.55871 14.6839 2.79565 15 2 15V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V15C21.2044 15 20.4413 14.6839 19.8787 14.1213C19.3161 13.5587 19 12.7957 19 12C19 11.2044 19.3161 10.4413 19.8787 9.87868C20.4413 9.31607 21.2044 9 22 9V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V9Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
               
                <div className="text-left">
                  <p className="text-xl text-black/50 mb-2">Tickets</p>
                  <p className="font-medium text-2xl">
                    ${data.memberPrice} Member
                  </p>
                  <p className="text-xl text-black/50 font-normal mt-1">
                    ${data.nonMemberPrice} Non Member
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-10">
            <Button

              className={`w-full py-6 font-medium text-[24px] text-white uppercase ${data.isSoldOut
                ? "bg-[#F97316] cursor-not-allowed"
                : "bg-[#F97316] hover:bg-[#e66a1f]"
                }`}
            >
              {data.isSoldOut ? "Event Sold Out" : "Register Now"}
            </Button>
          </div>

        </CardContent>
      </Card>

    </motion.div>
  );
}