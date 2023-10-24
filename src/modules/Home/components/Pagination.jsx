function Pagination({ offset, totalPages, onNext, onPrevious }) {
  return (
    totalPages !== 0 && (
      <div className="flex justify-between items-center sticky top-20 h-14 z-20 w-full font-medium bg-white px-5 py-2 border-red-300 border-b">
        <button
          onClick={onPrevious}
          disabled={offset === 0}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>
          {offset / 10 + 1} of {totalPages}
        </span>
        <button
          onClick={onNext}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    )
  );
}

export default Pagination;
