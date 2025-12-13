import clsx from "clsx";
import { useEffect, useState } from "react";

const Pagination = ({ items = [], setItems, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ guard
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const pagesCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = [...items]
      .reverse()
      .slice(startIndex, endIndex);

    setItems?.(paginatedItems);
  }, [currentPage, items, itemsPerPage, setItems]);

  const changePageHandler = (pageNumber) =>
    setCurrentPage(pageNumber);

  return (
    <div
      className="pagination rounded-b-3xl dark:bg-neutral-800/50 bg-zinc-50/40"
      dir="rtl"
    >
      <button
        disabled={currentPage === 1}
        onClick={() => changePageHandler(currentPage - 1)}
        className={clsx("pagination-prev-button", {
          "pages-ended active-tab": currentPage === 1,
        })}
      >
        قبلی
      </button>

      {Array.from({ length: pagesCount }).map((_, i) => (
        <button
          key={i}
          onClick={() => changePageHandler(i + 1)}
          className={clsx("pagination-button", {
            "active-tab": currentPage === i + 1,
            "non-active-tab": currentPage !== i + 1,
          })}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === pagesCount}
        onClick={() => changePageHandler(currentPage + 1)}
        className={clsx({
          "pages-ended active-tab": currentPage === pagesCount,
        })}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
