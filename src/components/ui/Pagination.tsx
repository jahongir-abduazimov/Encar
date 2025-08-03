import React from "react";
import { FiArrowRight } from "react-icons/fi";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`flex justify-center items-center gap-2 py-4 ${className}`}>
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`min-w-10 h-10 flex items-center cursor-pointer justify-center rounded-md border text-white font-bold text-lg ${
          currentPage === 1 ? "bg-gray-300" : "bg-primary hover:bg-primary/80 duration-200"
        }`}
      >
        <FiArrowRight className="rotate-180" />
      </button>

      {/* Page Numbers Scrollable */}
      <div className={`overflow-x-auto scroll-none`}>
        <div className="flex flex-nowrap gap-1">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-10 outline-none h-10 flex cursor-pointer items-center justify-center rounded-md text-md font-semibold ${
                currentPage === page
                  ? "bg-white border-primary text-primary border-2"
                  : "bg-white border text-gray-600 hover:border-primary hover:text-primary"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`min-w-10 h-10 flex items-center cursor-pointer justify-center rounded-md border text-white font-bold text-lg ${
          currentPage === totalPages
            ? "bg-gray-300"
            : "bg-primary hover:bg-primary/80 duration-200"
        }`}
      >
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
