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

  des: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Monica HERNÁNDEZ",
    role: "President & CEO",

    des: "Monica Hernandez is a dynamic executive and community leader, currently serving as Vice President of Asset Services Control within Global Markets Operations at Bank of America. With over 15 years of experience in finance and operations, she has led high-performing teams across Deutsche Bank and Bank of America, while also serving on the Global Diversity & Inclusion Board and co-chairing the Hispanic Organization for Leadership & Advancement (HOLA).Monica holds a Master’s in Finance and Marketing and a Strategic Management certificate from Harvard. As President of the First Coast Hispanic Chamber of Commerce, she has twice led the organization to national recognition as Chamber of the Year. Recognized as an Ultimate CEO, Woman of Influence, and Top 40 Under 40, Monica bridges boardrooms and communities—championing inclusive growth, cultural pride, and strategic leadership at every level.",
    image: "/images/BM1.png",
  },
  {
    id: 2,
    name: "Wilfredo (Willie) Gonzalez",
    role: "Chair of the Board",

    des: "Wilfredo J. Gonzalez is a retired District Director for the U. S. Small Business Administration (SBA). He served the small businesses of North Florida since December 1996. Gonzalez served as the District Director for the Washington D.C. District Office from May 1994. Gonzalez was responsible for delivering SBA programs and services to 43 Counties in North Florida. He oversaw the daily operations of federal staff located in Jacksonville and Orlando, Florida. Under his leadership, the district saw a steady increase in government backed lending activity since the economic downturn of 2009. Prior to this appointment, Gonzalez held several leadership roles including Associate Administrator for Minority Small Business and Capital Ownership Development at the SBA; Regional Director for the Department of Commerce, Minority Business Development Agency in Atlanta, Georgia; Staff Director with the U. S. Commission on Civil Rights; Associate Director of EEO and Civil Rights with the U. S. Department of State; Country Director of the Peace Corps in Ghana, West Africa; Chief of Operations for Peace Corps Latin America Region; and Deputy Director of the Peace Corps in Bogota, Colombia. Gonzalez started his federal career as a HEW Fellow in 1976; he subsequently served as Special Assistant to the Deputy Assistant Secretary at the Department of Labor. Gonzalez earned his Bachelors of Arts from the University of Puerto Rico (Magna Cum Laude). He also attended the John F. Kennedy School of Government at Harvard University, Cambridge, Massachusetts, and the Federal Executive Institute in Charlottesville, Virginia. Gonzalez serves the community through his membership in various boards and organizations including the Regional Community Institute (RCI) of Northeast Florida, Inc.; the Sheriff’s Advisory Board of the Police Athletic League (PAL); the Board of the Jacksonville Zoo & Gardens; the SBDC Advisory Council; the UNF Student Affairs Community Council; the Community Advisory Board for WJCT (PBS); the Board for Visit Jacksonville; and the Northeast Florida Global Cities Initiative. He previously served on the Board of Trustees of the University of North Florida, the Citizens Forum of the Florida Bar, the Judicial Nominating Commission for the 4th Judicial District, the Board of Directors of Habitat for Humanity (HABIJAX), the North Florida Hispanic Leadership Alliance, the Board of Directors of the National Council on Community and Justice, the Jacksonville Mayor’s Hispanic American Advisory Board, the Florida State Advisory Committee for the U.S. Commission on Civil Rights, the oversight committee for the Better Jacksonville Plan, and the Sports & Entertainment Commission for the City of Jacksonville.In 2014 Gonzalez received the NFL Hispanic Heritage Leadership Award from the Jacksonville Jaguars® and the Founder’s Award from Latina Style Magazine. Gonzalez is a Veteran of the United States Navy. He and his wife, Rocelia, are the parents of three children and reside in Jacksonville.",
    image: "/images/BM2.jpg",
  },
  {
    id: 3,
    name: "Sandra (Sandy) MARTIN",
    role: "Vice Chair",

    des: "Sandra (Sandy) Martin is an Advanced IT Systems Analyst at Florida Blue. Strong analytical and problem-solving skills allow her to resolve business application issues within the IT environment experienced by our providers. Sandy has been with Florida Blue since 2003. Prior to her current position within Florida Blue, her career path included Customer Service Supervisor, and Assistant Manager in a Retail environment.During her tenure at Florida Blue, Sandy has been instrumental in championing diversity and inclusion initiatives within the employee base. Serving on the diversity-based GuideWell Community HOLA, (Hispanic Organization for Learning and Advancement), since 2011, she has often been a voice for many regarding diversity and cultural competency. Sandy has been serving as the HOLA Community’s Chair since 2014. Sandy’s passion for being of service to the community, celebrating the beauty and value of the Hispanic culture, and striving towards facilitating the success of Hispanic professionals and Hispanic entrepreneurs, both within Florida Blue and in the Jacksonville Community at large, is the driving force of this consummate professional.",
    image: "/images/BM3.jpg",
  },
  {
    id: 4,
    name: "Sabrina MARCOS SMITH",
    role: "Director-at-Large",

    des: "Sabrina Marcos Smith is a Cuban American attorney at Fisher Tousey Leas & Ball. Her practice involves business, real estate, commercial and trust and fiduciary litigation. She graduated from the University of North Carolina at Chapel Hill where she was a recipient of the Joseph E. Grace and Needham Pogue Scholarship. Following her time at UNC, Sabrina received her Juris Doctorate from Saint Louis University School of Law and was admitted to the Florida Bar. Prior to joining Fisher Tousey, Sabrina served as an Assistant State Attorney for the Fourth Judicial Circuit in Jacksonville, Florida, where she tried over a dozen cases from jury selection to verdict. Sabrina then practiced as a general civil litigator in the Jacksonville, Florida office of a national law firm. Sabrina tailors her practice to catering to the needs of business owners in Northeast Florida, volunteers as Co-Chair of the Hispanic and Latino Interest Committee of the Jacksonville Bar Association, the Rotary Club of Downtown Jacksonville and is alumna of the 2019 class of Leadership Jacksonville: Next Generation. Sabrina was recently recognized in the 2024 edition of Best Lawyers: Ones to Watch® for her outstanding professional excellence in private practice.",
    image: "/images/BM4.jpg",
  },
  {
    id: 5,
    name: "Michelle KAPLAFKA",
    role: "Secretary",

    des: "Michelle Kaplafka is a seasoned leader with 16 years of experience at Florida Blue. She currently leads a team of 25+ employees within the Member Contact Center. She has a passion for developing talent and engaging in self-development. She joined one of Florida Blue’s Employee Resource Groups, HOLA (Hispanic Organization for Learning and Advancement) as the Marketplace Director in 2019. Michelle was born in Jacksonville, FL and raised in a small town called Callahan. She is an active member of Live Oak Baptist Church and is involved in mission outreaches, such as food and education for children of Ecuador. She received her Associate’s Degree from Florida State College of Jacksonville and is currently pursuing her Bachelor’s in Business Management. ",
    image: "/images/BM5.jpg",
  },
  {
    id: 6,
    name: "Beatrice CHANDLER",
    role: "Director-at-Large",

    des: "Beatrice Chandler is Owner/General Operations Manager for Latin Creations. She is a HR Specialist with over nine years of experience recruitment and employment processes. Highly driven Recruiter who maintains a positive attitude under pressure and welcomes the challenge and responsibility of producing results quickly. She focuses on building and maintaining candidate relationships to keep a consistent talent pipeline. Some of her achievements are: Founded and managing a restaurant for ten years, successful and thriving.Devised a successful recruiting plan for hard to fill positions, which resulted in filling multiple positions when they became available.Implemented new strategies to streamline recruitment and onboarding processes. Filled over a hundred hires in a two to three week period. Revamped the orientation process for all new hires, which was implemented company wide.",
    image: "/images/BM6.jpg",
  },
  {
    id: 7,
    name: "Leon Carrero",
    role: "Director-at-Large",
    des: "Mr. Leon Carrero currently serves as a Project Manager of the Military and Interagency and International Services Branch, Programs and Project Management Division for the U.S. Army Corps of Engineers (USACE) in the Jacksonville District. Prior to joining the USACE, Mr. Carrero worked at Aerostar Environmental Services where he was a Program Manager for State, Local and Federal clients for almost 30 years. Mr. Carrero was born in Venezuela arrived in the United States in 1982 to attend college. He has been residing permanently in Jacksonville, Florida for the past 32 years. His entire professional career has been developed in Jacksonville and has participated in many community initiatives where he hasreceived several recognitions.Community Development: Past-President, First Coast Hispanic Chamber of Commerce. Received Certificate of Appreciation in 2006 from the US Department of Homeland Security for participating in the Federal Law Enforcement Training Center’s National Hispanic Heritage Month Celebration. Chaired committees with the First Coast Hispanic Chamber of Commerce and the Hispanic Mayor’s Advisory Board that awarded scholarships to Hispanic college students. Past Chair, City of Jacksonville Mayor’s Hispanic American Advisory Board. As chair of the MHAAB, received certificate of Appreciationfrom the US Army Corps of Engineers – Jacksonville District in 2010 for participating in the District’s Hispanic Heritage Month Celebrations. Past-President of the Rotary Club of Southpoint, Jacksonville. Graduate Leadership Jacksonville Class of 2003. Graduate FBI Citizen’s Academy Class of 2012. Past Member of City of Jacksonville Task Force on Consolidated Government, 2013-2014. Make a Wish Volunteer, 2016. Past member University of North Florida Student Affairs Community Council from 2016-2019 Past member of the Duval County Supervisor of Elections Advisory Panel – 2017. In 2015, coordinated with Hispanic community leaders and the Duval County Supervisor of Elections office to increase Hispanic Voter registration and participation in future presidential elections.",

    image: "/images/BM7.jpeg",
  },
  {
    id: 8,
    name: "Helga Langthon",
    role: "Director-at-Large",

    des: `Helga P. Langthon is the Vice President and Owner of SOHO Network Solutions, Inc., a Florida-based import/export company specializing in the forensics and identification industry. The company was the recipient of the 2010 SBA Southeast Region Exporter of the Year award.

In her role, Langthon focuses on developing new markets through a wide distribution network while establishing strong relationships with SOHO’s suppliers. Her responsibilities include overseeing day-to-day operations, as well as hiring and training new personnel. She has more than 20 years of experience in forensics, law enforcement, and international trade.

Langthon previously worked for Armor Holdings from May 2000 to July 2006 as a Sales Manager. In 2006, she was transferred to Switzerland to direct Armor Forensics International AG, the European subsidiary of Armor Holdings. She returned to the U.S. in October 2007 and was promoted to Global Sales Manager for BAE Systems. During her tenure at Armor/BAE, she was responsible for analyzing, directing, and implementing sales strategies for products such as narcotics identification kits, evidence collection tools, fingerprinting technology, and DNA sampling. She managed gross sales exceeding $15 million and oversaw operations for more than 250 accounts worldwide.

In 1998, Langthon graduated from the University of Texas at Arlington with a B.A. in Liberal Arts, concentrating in International Business and Spanish. She is an active participant in international trade initiatives with the Jacksonville Chamber of Commerce and U.S. Commercial Services. She has also served as a Division Representative for the International Association for Identification (IAI), on the NEFL SBDC Advisory Council, and as Board President of The HILL of Northeast Florida, the Douglas Anderson School of the Arts Orchestra Boosters, and the LaVilla School of the Arts Dance Boosters. Additionally, she served as Vice President of Ways and Means for the Pine Forest School of the Arts PTA and was honored as one of the 2019 Volunteers in Medicine Women with Heart.

She is married to Mauricio, and they have three children: Daniela (20), Julieta (15), and Alejandro (12).`,
    image: "/images/BM8.png",
  },
  {
    id: 9,
    name: "Joel Gonzalez",
    role: "Director-at-Large",

    des: `Joel Gonzalez is CEO, Team Leader and Realtor at Real 4 Jax Team – Rise Realty Advisors. Their mission as realtors® is to make sure that their clients do not feel pressured in their decision-making as they guide them through the exciting process of home ownership. Their organization assists people with taking advantage of opportunities that will allow them to get their first or next home starting with a free no-commitment consultation.

Joel is an analytical and achievement driven MBA with broad international experience in quality, procurement, logistics, inventory and supply chain management. Great managerial and organizational skills. Improvement and detail-oriented individual with ability to work across all levels of the organization.

Some of his accomplishments include:

Successful leadership role results in SC&L (Supply Chain and Logistics) processes in two different industries: electronics & auto
Extensive experience in inventory management, warehousing, sourcing, global procurement, and ocean&air traffic management
Proven track record as a multi-task team player in the execution of ISO audits, corporate program procedures, project management, governmental affairs, control of global operations, top management decision making contribution
Multilingual ability with good proficiency in English, Spanish and Portuguese. Basic knowledge of French, German and Italian.`,
    image: "/images/BM9.png",
  },
  {
    id: 10,
    name: "Cindy Caldwell",
    role: "Director-at-Large",

    des: `Cindy Caldwell is the Co-Founder of Ramplify, a Minority- and Women-Owned Small Business (MWOSB) dedicated to helping organizations amplify their impact. Ramplify partners with clients to co-create custom infrastructures that strengthen branding and effectively communicate their mission to key audiences, including practitioners and community stakeholders. Alongside her team, Cindy provides specialized support in strategic planning, professional learning, grant writing, and project management for nonprofits, foundations, and state/federal agencies.

With over 20 years in education, Cindy is a seasoned expert in designing and leading professional development on topics such as de-escalation, trauma-informed practices, and creating safe, culturally affirming learning environments.

The daughter of an immigrant who built and successfully ran her own insurance company for over 35 years, Cindy inherited a deep-rooted entrepreneurial spirit and work ethic from both of her parents. She spent most of her life and career in Miami, FL, before relocating to Jacksonville in 2021. Cindy has been married to her husband, Charles, for 20 years and is a proud mom to Emily, a seventh grader. In her free time, she enjoys performing improv on stage and perfecting her archery skills with her compound bow.`,
    image: "/images/BM10.png",
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
