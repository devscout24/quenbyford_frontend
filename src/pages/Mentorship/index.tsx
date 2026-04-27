import AttributesSplitSection from "./_components/AttributesSplitSection"
import ParticipationCriteria from "./_components/CriteriaToParticipate"
import ProgramGoals from "./_components/GoalsMentorshipProgram"
import MentorBenefits from "./_components/MentorBenefits"
import MentorshipHeaderSection from "./_components/MentorshipHeaderSection"
import ProgramBenefits from "./_components/ProgramBenefits"


const MentorshipPage = () => {
  return (
    <div>
        <MentorshipHeaderSection/>
        <ProgramBenefits/>
        <MentorBenefits/>
        <ParticipationCriteria/>
        <ProgramGoals/>
        <AttributesSplitSection/>
    </div>
  )
}

export default MentorshipPage