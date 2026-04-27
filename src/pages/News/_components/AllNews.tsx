import { newsData } from '@/pages/Home/_components/FcgccNews';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useTranslation } from "react-i18next";

const AllNews = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = newsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="max-w-360 mx-auto px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold text-[#0F172A] mb-8">{t("news.all.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {paginatedNews.map((news) => (
          <Link to={`/news/${news.id}`} key={news.id} className="w-full block hover:opacity-80 transition-opacity cursor-pointer">
            <img
              src={news.image}
              alt={t(news.title)}
              className="rounded-lg w-full h-75 object-cover"
            />

            <p className="text-[16px] text-black mt-4 font-normal leading-7">
              {news.date}
            </p>

            <h3 className="font-medium text-[22px] capitalize text-black">
              {t(news.title)}
            </h3>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent className="text-slate-400 mt-8">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(Math.max(1, currentPage - 1));
              }}
              className="hover:bg-transparent hover:text-slate-900 cursor-pointer"
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
                isActive={currentPage === index + 1}
                className="border-none bg-transparent text-orange-500 font-bold hover:bg-transparent cursor-pointer"
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(Math.min(totalPages, currentPage + 1));
              }}
              className="hover:bg-transparent hover:text-slate-900 cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default AllNews;
