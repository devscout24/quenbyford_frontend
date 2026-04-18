import AssociatePolicy from "./_components/AssociateMember"
import HeroSection from "./_components/JoinUsBanner"
import MemberBenefits from "./_components/MemberBenifts"
import MembershipLevels from "./_components/MemberShipsLevel"
import MissionSection from "./_components/Mission"
import DiscountSection from "./_components/MultyYear"


const JoinUsPage = () => {
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