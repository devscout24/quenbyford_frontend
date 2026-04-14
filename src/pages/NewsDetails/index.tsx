import { useParams, Link } from "react-router-dom";
import { NewsSingleDetailPage } from "./_components/SingleDetials";
import { newsData } from "@/pages/Home/_components/FcgccNews";

const NewsDetailsPage = () => {
  const { id } = useParams();
  
  
  const matchedNews = newsData.find(item => item.id.toString() === id) || newsData[0];
  
  const eventDataMock = {
    title: matchedNews.title,
    date: matchedNews.date,
    banner: matchedNews.image,
    content: [
      "ON APRIL 29, 2025, THE FIRST COAST HISPANIC CHAMBER OF COMMERCE HOSTED ITS ANNUAL HOLA EMPRENDE – DUVAL CONFERENCE 2025. THIS IS THE 3RD ITERATION OF THIS INCREDIBLY SUCCESSFUL EVENT.",
      "THE FULL DAY CONFERENCE HOSTED WORKSHOPS AND PANEL DISCUSSIONS TO LENDER MATCHMAKING AND NETWORKING—THERE WAS SO MUCH VALUE PACKED INTO ONE DAY.",
      "THE SPEAKERS WERE: JONEL HEIN, GREGORY GRANT, NICK CORREA AND MANY MORE AMAZING BUSINESS LEADERS."
    ],
    gallery: [
      "/images/Vector (1).png",
      "/images/Vector (1).png",
      "/images/Vector (2).png",
      "/images/Vector (3).png",
      "/images/Vector (4).png",
      "/images/Vector (5).png"
    ],
    galleryLink: "#",
    pdf: "#"
  };

  return (
    <div className="max-w-7xl mx-auto pt-6">
      <Link to="/news" className="text-orange-500 font-bold hover:underline inline-block my-16">
        &larr; Back to News
      </Link>
      <NewsSingleDetailPage data={eventDataMock} />
    </div>
  )
}

export default NewsDetailsPage;