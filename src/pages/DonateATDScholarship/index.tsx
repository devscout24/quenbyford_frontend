import ScholarshipProgram from "./_components/DonateATDScholarshipBanner"
import ScholarshipCriteria from "./_components/ScholarshipCriteria"
import StudentDonationSection from "./_components/StudentDonateScholershop"
import FAQSection from "./_components/StudentFAQSection"
import ScholarshipRequirements from "./_components/ScholarshipRequirements"
import WinnersSection from "./_components/WinnersSection"


const DonateATDScholarshipPage = () => {
  return (
    <div>
        <ScholarshipProgram />
        <StudentDonationSection/>
        <ScholarshipCriteria/>
        <ScholarshipRequirements/>
        <FAQSection/>
        <WinnersSection/>
    </div>
  )
}

export default DonateATDScholarshipPage