import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";


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
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border border-gray-200 ring-0 shadow-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 rounded-2xl overflow-hidden">
        <CardContent className="p-6 w-full h-auto flex flex-col items-center text-center space-y-4">

          <Avatar className="w-16 h-16 border-2 border-white shadow-sm">
            <AvatarImage src={member.image} alt={member.name} className="object-cover" />
            <AvatarFallback>
              {member.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          {/* Info */}
          <div className="space-y-1">
            <h3 className="text-xl font-medium text-black mt-3">{member.name}</h3>
            <p className="text-[#F97316] font-normal text-lg sm:text-xl min-h-[54px] flex items-center justify-center mb-2">{member.role}</p>
            <p className="text-[#000000] font-medium text-lg sm:text-xl">{member.position}</p>
          </div>

          {/* Button */}
          <Button
            onClick={onOpenBio}
            variant="outline"
            className="rounded-full border-[#FF7A1A] text-[#FF7A1A] hover:bg-[#FF7A1A] hover:text-white px-10 h-12 mt-6 text-sm font-semibold transition-colors duration-300"
          >
            {t("about.team.full_bio")}
          </Button>

        </CardContent>
      </Card>
    </motion.div>
  );
};

// 🔹 Main Section
const LeadershipTeam = () => {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-20 relative">

      {/* Header */}
      <div className="text-center mb-16 space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          {t("about.team.title")}
        </h2>
        <p className="text-black text-lg font-normal">
          {t("about.team.desc")}
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
              className="w-full max-w-lg mx-auto"
            >
              <Card className="border ring-0 border-white shadow-2xl rounded-3xl overflow-hidden relative w-full h-auto bg-white">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-gray-500 hover:bg-gray-100 rounded-full"
                  onClick={() => setSelectedMember(null)}
                >
                  <X size={20} />
                </Button>
                <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 border-4 border-orange-50 shadow-md mb-5">
                    <AvatarImage src={selectedMember.image} alt={selectedMember.name} className="object-cover" />
                    <AvatarFallback>{selectedMember.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl sm:text-2xl font-medium text-black mb-1">{selectedMember.name}</h3>
                  <p className="text-orange-500 font-medium text-lg sm:text-xl mb-1">{selectedMember.role}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mb-6 uppercase xl:tracking-widest tracking-wider font-semibold">{selectedMember.position}</p>

                  <p className="text-black mb-8 leading-relaxed text-base sm:text-lg md:text-xl text-left">
                    {t("about.team.bio_desc", { name: selectedMember.name, role: selectedMember.role })}
                  </p>

                  
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
