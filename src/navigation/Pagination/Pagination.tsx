import React from "react";
import classNames from "classnames/bind";
import { ArrowLeft, ArrowRight } from "../../icons";

import styles from "./Pagination.module.css";

const cx = classNames.bind(styles);

interface PaginationItemProps {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
  disabled = false,
  onClick,
  children,
}) => {
  const arrowButtonClass = cx({
    btnArrow: true,
    btnDisabled: disabled,
  });
  return (
    <button className={arrowButtonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

interface PaginationProps {
  currentPage: number;
  maxPages: number;
  onChange: (value: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  maxPages,
  onChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= maxPages) {
      onChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= maxPages; i++) {
      if (
        i === 1 ||
        i === maxPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <div
            className={`${styles.btn} ${currentPage === i && styles.active}`}
            onClick={() => handlePageChange(i)}
          >
            <p>{i}</p>
          </div>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push(<div>...</div>);
      }
    }

    return pageNumbers;
  };

  const paginationClass = cx({
    paginationWrapper: true,
  });

  return (
    <nav className={paginationClass}>
      <PaginationItem
        disabled={currentPage === 1}
        onClick={() => {
          handlePageChange(currentPage - 1);
        }}
      >
        <ArrowLeft />
      </PaginationItem>
      {renderPageNumbers()}
      <PaginationItem
        disabled={currentPage === maxPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ArrowRight />
      </PaginationItem>
    </nav>
  );
};
