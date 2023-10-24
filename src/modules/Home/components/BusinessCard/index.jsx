import CategoryBadge from "./CategoryBadge";
import StarRating from "./StarRating";

function BusinessCard({ business }) {
  return (
    <div className="border border-red-300 rounded-lg p-2 flex flex-row space-x-4 w-[550px] grow-0">
      <img
        src={business.image_url}
        alt={business.name}
        className="h-[200px] w-[200px] object-cover rounded-l-lg shrink-0"
      />
      <div className="flex flex-col justify-between">
        {/* Top Info */}
        <div className="flex flex-col">
          <p className="font-bold text-lg">{business.name}</p>
          <p className="text-sm">
            {business.location.display_address.join(", ")}
          </p>
          <StarRating
            rating={business.rating}
            reviewCount={business.review_count}
          />
          {business.price && (
            <div className="flex flex-row items-center space-x-2 mt-2">
              <p className="text-xs">Price Range</p>
              <p className="text-xs font-medium bg-red-300 rounded-md px-2 ">
                {business.price}
              </p>
            </div>
          )}
        </div>
        {/* Bottom Info */}
        <div className="flex flex-row flex-wrap">
          {business.categories.map((category) => (
            <CategoryBadge key={category.alias} title={category.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
