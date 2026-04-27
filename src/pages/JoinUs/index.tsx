import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AssociatePolicy from "./_components/AssociateMember"
import HeroSection from "./_components/JoinUsBanner"
import MemberBenefits from "./_components/MemberBenifts"
import MembershipLevels from "./_components/MemberShipsLevel"
import MissionSection from "./_components/Mission"
import DiscountSection from "./_components/MultyYear"


const JoinUsPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div>
        <HeroSection />
        <MissionSection/>
        <MembershipLevels/>
        <DiscountSection/>
        <MemberBenefits/>
        <AssociatePolicy/>

    </div>
  )
}

export default JoinUsPage