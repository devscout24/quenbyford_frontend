import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "@/pages/Home/layout";
import Home from "@/pages/Home";
import Members from "@/pages/Members";
import StrategicPartners from "@/pages/PartnersDetails/_components/PartnerDetails";
import NewMember from "@/pages/NewMember";
import RedioProgram from "@/pages/RedioProgram";
import PodcastProgram from "@/pages/PostCastProgram/_components/PstCastProgram";
import DiscountPro from "@/pages/DiscountProgram/_components/Discount";
import SocialCafecito from "@/pages/WorkShope/_components/WorkCafeShope";
import EventPage from "@/pages/Events";
import Scholarship from "@/pages/ADTScholarship";
import ScholarshipWinners from "@/pages/ScholarshipWinners";
import CalnedearPage from "@/pages/Calender";
import AllNewsPage from "@/pages/News";
import NewsDetailsPage from "@/pages/NewsDetails";
import Resources from "@/pages/Resources";
import CommunityPage from "@/pages/Community";
import JobPage from "@/pages/Job";
import AllJobs from "@/pages/AvailableJobs";
import JobDetails from "@/pages/JobDetails";
import ContractPage from "@/pages/Contract";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import AboutPage from "@/pages/About";
import OurCommettePage from "@/pages/OurCommette";
import ComingSoon from "@/pages/ComingSoon";
import Media from "@/pages/Media";
import SponsorsDetails from "@/pages/SponsorsDetails";
import WellcomePage from "@/pages/Wellcome";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import JoinUsPage from "@/pages/JoinUs";
import BenifitsPage from "@/pages/Benifits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/member-welcome",
        element: <WellcomePage />,
      },
      {
        path: "/partners",
        element: <StrategicPartners />,
      },
      {
        path: "/partners/newmembers",
        element: <NewMember />,
      },
      {
        path: "/partners/redioprogram",
        element: <RedioProgram />,
      },

      {
        path: "/partners/podcastprogram",
        element: <PodcastProgram />,
      },

      {
        path: "/partners/discountprogram",
        element: <DiscountPro />,
      },

      {
        path: "/partners/workshope",
        element: <SocialCafecito />,
      },

      {
        path: "/events",
        element: <EventPage />,
      },
      {
        path: "/events/scholarship",
        element: <Scholarship />,
      },
      {
        path: "/scholarshipwinners",
        element: <ScholarshipWinners />,

      },
      {
        path: "/events/calender",
        element: <CalnedearPage />,

      },
      {
        path: "/news",
        element: <AllNewsPage />,
      },
      {
        path: "/news/:id",
        element: <NewsDetailsPage />,
      },
      {
        path: "/news/resources",
        element: <Resources />,

      },
      {
        path: "/community",
        element: <CommunityPage />,

      },
      {
        path: "/jobs",
        element: <JobPage />,

      },
      {
        path: "/availablejobs",
        element: <AllJobs />,
      },
      {
        path: "/availablejobs/:id",
        element: <JobDetails />,
      },
      {
        path: "/contact",
        element: <ContractPage />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about/committee",
        element: <OurCommettePage />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
      },
      {
        path: "/sponsors-details",
        element: <SponsorsDetails />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/joinus",
        element: <JoinUsPage />,
      },
      {
        path: "/benifits",
        element: <BenifitsPage />,
      },
    ],
  },
]);

export default router;
