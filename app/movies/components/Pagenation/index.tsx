"use client";

import { Button } from "@radix-ui/themes";
import React, { useContext, useState } from "react";
import { MoviesFiltersCxt } from "../../context";

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  // Vars
  const { handleChangePage } = useContext(MoviesFiltersCxt);
  const [activePage, setActivePage] = useState(currentPage || 1);

  // Methods
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setActivePage(page);
    handleChangePage(page);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Previous Button */}
      <Button
        disabled={activePage === 1}
        onClick={() => handlePageChange(activePage - 1)}
        className={`px-4 py-2 text-sm font-medium ${
          activePage === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Previous
      </Button>

      {/* Page Numbers */}
      <Button
        className={`px-3 py-2 text-sm font-medium rounded bg-blue-600 text-white`}
      >
        {currentPage}
      </Button>

      {/* Next Button */}
      <Button
        disabled={activePage === totalPages}
        onClick={() => handlePageChange(activePage + 1)}
        className={`px-4 py-2 text-sm font-medium ${
          activePage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Next
      </Button>
    </div>
  );
};

interface PaginationProps {
  totalPages: number;
  currentPage?: number;
}

export default Pagination;
