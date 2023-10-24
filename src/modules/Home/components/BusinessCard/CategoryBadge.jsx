function CategoryBadge({ title }) {
  return (
    <div className="bg-red-300 w-fit py-1 px-2 rounded-lg grow-0 mr-2 mb-2">
      <p className="text-xs">{title}</p>
    </div>
  );
}

export default CategoryBadge;
