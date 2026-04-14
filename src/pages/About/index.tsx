import AboutHero from "./_components/AboutHero"
import RecognitionSection from "./_components/AwardCard"
import OurStory from "./_components/OurStory"
import LeadershipTeam from "./_components/TeamMemberCard"


const AboutPage = () => {
  return (
    <div>
        <AboutHero />
        <OurStory/>
        <LeadershipTeam/>
        <RecognitionSection/>
    </div>
  )
}

export default AboutPage