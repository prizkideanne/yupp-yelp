import { StarIcon } from "@heroicons/react/20/solid";

function StarRating({ rating, reviewCount }) {
  return (
    <div className="flex items-center space-x-px flex-row">
      {[0, 1, 2, 3, 4].map((star) => (
        <StarIcon
          key={Math.random()}
          className={`${
            rating > star ? "text-yellow-400" : "text-gray-200"
          } h-4 w-4 flex-shrink-0`}
          aria-hidden="true"
        />
      ))}
      <p className="text-slate-600 text-sm mt-1 pl-2">{rating}</p>
      <p className="text-slate-600 text-sm mt-1 pl-2">
        ({`${reviewCount} reviews`})
      </p>
    </div>
  );
}

export default StarRating;
