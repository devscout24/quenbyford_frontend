import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import {  X } from "lucide-react";


// ✅ Dynamic Team Data
interface TeamMember {
  id: number;
  name: string;
  role: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Monica Hernandez",
    role: "President & CEO",
    position: "Board Member",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Chief Technology Officer",
    position: "Board Member",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Chief Marketing Officer",
    position: "Executive",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Smith",
    role: "Finance Director",
    position: "Board Member",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Emma Watson",
    role: "HR Manager",
    position: "Executive",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Operations Manager",
    position: "Executive",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Olivia Johnson",
    role: "Product Manager",
    position: "Board Member",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "Daniel Wilson",
    role: "Lead Developer",
    position: "Executive",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

// 🔹 Single Card
const TeamMemberCard = ({ member, index, onOpenBio }: { member: TeamMember, index: number, onOpenBio: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2, delay: 0 } }}
      className="h-full"
    >
      <Card className="h-full border border-gray-200 ring-0 shadow-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 rounded-2xl overflow-hidden">
        <CardContent className=" p-6 w-72 h-auto flex flex-col items-center text-center space-y-4">
        
        <Avatar className="w-16 h-16 border-2 border-white shadow-sm">
          <AvatarImage src={member.image} alt={member.name} className="object-cover" />
          <AvatarFallback>
            {member.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="text-xl font-medium text-black mt-3 mb-">{member.name}</h3>
          <p className="text-[#F97316] font-normal text-xl w-60 h-9 mb-7">{member.role}</p>
          <p className="text-[#000000] font-medium text-xl">{member.position}</p>
        </div>

        {/* Button */}
        <Button 
          onClick={onOpenBio}
          variant="outline" 
          className="rounded-full border-[#FF7A1A] text-[#FF7A1A] hover:bg-[#FF7A1A] hover:text-white px-10 h-12 mt-6 text-sm font-semibold transition-colors duration-300"
        >
          Full Bio
        </Button>

      </CardContent>
      </Card>
    </motion.div>
  );
};

// 🔹 Main Section
const LeadershipTeam = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 relative">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Leadership Team
        </h2>
        <p className="text-black text-lg font-normal">
          Meet the board of directors committed to your success.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.id} member={member} index={index} onOpenBio={() => setSelectedMember(member)} />
        ))}
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <Card className="border ring-0 border-white shadow-2xl rounded-3xl overflow-hidden relative w-155 h-auto bg-white">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-4 right-4 text-gray-500 hover:bg-gray-100 rounded-full"
                  onClick={() => setSelectedMember(null)}
                >
                  <X size={20} />
                </Button>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <Avatar className="w-50 h-50 border-4 border-orange-50 shadow-md mb-5">
                    <AvatarImage src={selectedMember.image} alt={selectedMember.name} className="object-cover" />
                    <AvatarFallback>{selectedMember.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-2xl font-medium text-black mb-1">{selectedMember.name}</h3>
                  <p className="text-orange-500 font-medium text-xl mb-1">{selectedMember.role}</p>
                  <p className="text-gray-500 text-sm mb-6 uppercase xl:tracking-widest tracking-wider font-semibold">{selectedMember.position}</p>
                  
                  <p className="text-black mb-8 leading-relaxed text-xl text-left">
                    {selectedMember.name} is the {selectedMember.role} at FCHCC, deeply committed to fostering 
                    growth and building strategic partnerships. With over 15 years of industry experience, 
                    they play an integral part in community development and corporate strategy.
                  </p>
                  
                  {/* <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
                      <FaLinkedin size={18} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-200 text-gray-500 hover:text-sky-500 hover:border-sky-500 transition-colors">
                      <FaFacebook size={18} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-500 transition-colors">
                      <Mail size={18} />
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default LeadershipTeam;