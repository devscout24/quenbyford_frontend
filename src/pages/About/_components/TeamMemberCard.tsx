import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";


// ✅ Team Member Interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  des: string;
  image: string;
}

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
            <p className="text-[#000000] font-normal text-[16px]  line-clamp-4">
              {member.des}
            </p>
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

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: t("about.team_members.monica.name"),
      role: t("about.team_members.monica.role"),
      des: t("about.team_members.monica.bio"),
      image: "/images/BM1.png",
    },
    {
      id: 2,
      name: t("about.team_members.willie.name"),
      role: t("about.team_members.willie.role"),
      des: t("about.team_members.willie.bio"),
      image: "/images/BM2.jpg",
    },
    {
      id: 3,
      name: t("about.team_members.sandy.name"),
      role: t("about.team_members.sandy.role"),
      des: t("about.team_members.sandy.bio"),
      image: "/images/BM3.jpg",
    },
    {
      id: 4,
      name: t("about.team_members.sabrina.name"),
      role: t("about.team_members.sabrina.role"),
      des: t("about.team_members.sabrina.bio"),
      image: "/images/BM4.jpg",
    },
    {
      id: 5,
      name: t("about.team_members.michelle.name"),
      role: t("about.team_members.michelle.role"),
      des: t("about.team_members.michelle.bio"),
      image: "/images/BM5.jpg",
    },
    {
      id: 6,
      name: t("about.team_members.beatrice.name"),
      role: t("about.team_members.beatrice.role"),
      des: t("about.team_members.beatrice.bio"),
      image: "/images/BM6.jpg",
    },
    {
      id: 7,
      name: t("about.team_members.leon.name"),
      role: t("about.team_members.leon.role"),
      des: t("about.team_members.leon.bio"),
      image: "/images/BM7.jpeg",
    },
    {
      id: 8,
      name: t("about.team_members.helga.name"),
      role: t("about.team_members.helga.role"),
      des: t("about.team_members.helga.bio"),
      image: "/images/BM8.png",
    },
    {
      id: 9,
      name: t("about.team_members.joel.name"),
      role: t("about.team_members.joel.role"),
      des: t("about.team_members.joel.bio"),
      image: "/images/BM9.png",
    },
    {
      id: 10,
      name: t("about.team_members.cindy.name"),
      role: t("about.team_members.cindy.role"),
      des: t("about.team_members.cindy.bio"),
      image: "/images/BM10.png",
    },
  ];

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
              className="w-full max-w-[1300px] mx-auto"
            >
              <Card className="border ring-0 border-white shadow-2xl rounded-3xl overflow-hidden relative w-full max-h-[90vh] overflow-y-auto bg-white">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-gray-500 hover:bg-gray-100 rounded-full"
                  onClick={() => setSelectedMember(null)}
                >
                  <X size={20} />
                </Button>
                <CardContent className="p-6 sm:p-10 flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 border-4 border-orange-50 shadow-md mb-5">
                    <AvatarImage src={selectedMember.image} alt={selectedMember.name} className="object-cover" />
                    <AvatarFallback>{selectedMember.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">{selectedMember.name}</h3>
                  <p className="text-orange-500 font-medium text-lg sm:text-xl mb-6">{selectedMember.role}</p>

                  <div className="text-black leading-relaxed text-base sm:text-lg md:text-xl w-full space-y-6 text-left">
                    {(() => {
                      const text = selectedMember.des;
                      const fullName = selectedMember.name;
                      
                      // Normalize function to remove accents for better matching
                      const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                      
                      // Extract main parts of the name (ignoring text in parentheses)
                      const nameParts = fullName
                        .replace(/\(.*\)/, "") // Remove nicknames like (Willie)
                        .split(/\s+/)
                        .filter(part => part.length > 2); // Only match significant parts

                      const rawParagraphs = text.split('\n').filter(p => p.trim() !== '');
                      const chunks: string[] = [];

                      rawParagraphs.forEach(p => {
                        // Lowered threshold to 300 characters for more frequent gaps
                        if (p.length > 300) {
                          const sentences = p.split('. ');
                          for (let i = 0; i < sentences.length; i += 3) {
                            chunks.push(sentences.slice(i, i + 3).join('. ') + (i + 3 < sentences.length ? '.' : ''));
                          }
                        } else {
                          chunks.push(p);
                        }
                      });

                      return chunks.map((para, i) => {
                        // Create a regex that matches any of the name parts
                        const regex = new RegExp(`(${nameParts.join('|')})`, 'gi');
                        const parts = para.split(regex);
                        
                        return (
                          <p key={i}>
                            {parts.map((part, j) => {
                              const isMatch = nameParts.some(np => 
                                normalize(part.toLowerCase()).includes(normalize(np.toLowerCase()))
                              );
                              return isMatch ? <strong key={j}>{part}</strong> : part;
                            })}
                          </p>
                        );
                      });
                    })()}
                  </div>
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
