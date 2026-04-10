import BadgesSection from "./_components/Badges"
import FchccNews from "./_components/FcgccNews"
import FCHCCMedia from "./_components/FchccMedia"
import Hero from "./_components/Hero"
import PartnersSection from "./_components/OurPartners"
import CorporateMarquee from "./_components/Partners"
import ProudMember from "./_components/ProudMember"
import Video from "./_components/Video"
import WhoWeAre from "./_components/WhoAreYou"



const Home = () => {
  return (
    <div>
     <Hero/>
     <CorporateMarquee/>
     <Video/>
     <WhoWeAre/>
     <FchccNews/>
      <BadgesSection/>
     <PartnersSection/>
     <FCHCCMedia/>
     <ProudMember/>
    
     </div>
  
  )
}

export default Home
