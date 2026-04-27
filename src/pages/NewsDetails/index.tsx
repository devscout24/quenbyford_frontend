import { useParams, Link, useNavigate } from "react-router-dom";
import { NewsSingleDetailPage } from "./_components/SingleDetails";
import { newsData } from "@/pages/Home/_components/FcgccNews";
import { useTranslation } from "react-i18next";


const NewsDetailsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const currentIndex = newsData.findIndex(item => item.id.toString() === id);
  const matchedNews = currentIndex !== -1 ? newsData[currentIndex] : newsData[0];

  const handlePrev = () => {
    if (currentIndex === -1) return;
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : newsData.length - 1;
    navigate(`/news/${newsData[prevIndex].id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentIndex === -1) return;
    const nextIndex = currentIndex < newsData.length - 1 ? currentIndex + 1 : 0;
    navigate(`/news/${newsData[nextIndex].id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const eventDataMock = {
    title: t(matchedNews.title),
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
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <Link to="/news" className="text-orange-500 font-bold hover:underline inline-block my-16">
        &larr; {t("news.details.back")}
      </Link>
      {/* @ts-ignore: TS editor cache might temporarily not recognize onPrev and onNext */}
      <NewsSingleDetailPage data={eventDataMock} onPrev={handlePrev} onNext={handleNext} />
    </div>
  )
}

export default NewsDetailsPage;