import { MapPinIcon } from "@heroicons/react/20/solid";
import CategoryBadge from "../../Home/components/BusinessCard/CategoryBadge";
import StarRating from "../../Home/components/BusinessCard/StarRating";
import Maps from "../../Home/components/Maps/Index";

function BusinessInfo({ business }) {
  return (
    <div className="flex flex-row space-x-5">
      <div className="flex-1 flex-col space-y-5">
        <StarRating
          rating={business.rating}
          reviewCount={business.review_count}
        />
        <div className="flex-row flex h-fit flex-wrap">
          {business.categories.map((category) => (
            <CategoryBadge title={category.title} key={category.alias} />
          ))}
        </div>
      </div>

      {/* Maps */}
      <div className="flex flex-col space-y-5">
        <div className="flex flex-row items-center justify-end space-x-2">
          <MapPinIcon className="text-red-300 w-5 h-5" />
          <p className="font-medium">
            {business.location.display_address.join(", ")}
          </p>
        </div>
        <div className="w-[400px] h-[200px]">
          <Maps businesses={[business]} region={business.coordinates} />
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
