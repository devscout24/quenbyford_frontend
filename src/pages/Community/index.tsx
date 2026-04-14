import CommunityHero from "./_components/CommunityHero"
import JoinMission from "./_components/JoinOurMission"
import LearnAndGrow from "./_components/LearnAndGrow"
import CommunityImpact from "./_components/OurCommunityImpact"
import StayConnected from "./_components/StayConnected"
import ProgramsSection from "./_components/TransformLives"


const CommunityPage = () => {
  return (
    <div>

      <CommunityHero />
      <CommunityImpact />
      <ProgramsSection />
      <LearnAndGrow />
      <JoinMission />
      <StayConnected />
    </div>
  )
}

export default CommunityPage