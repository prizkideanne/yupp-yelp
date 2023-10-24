function SearchPage() {
  return (
    <div className="bg-red-400 h-screen w-screen">
      {/* serach bar */}
      <div className="flex items-center justify-center bg-yellow-400 border-2 border-black p-6 mb-[20px] gap-4">
        <input></input>
        <button>search</button>
      </div>
      <div className="bg-green-300 flex flex-row gap-4 p-6 h-auto">
        <div className="border-2 border-black basis-1/6">
          filters
          <div>
            <p>price</p>
            <div className="border-2 border-black rounded-lg w-fit">
              {["$", "$$", "$$$", "$$$"].map((money) => (
                <button
                  key={money}
                  className="border-r-[1px] border-black hover:bg-yellow-300"
                >
                  {money}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border-2 border-black basis-1/2 flex flex-col items-center">
          list
          {/* business card */}
          <div className="flex flex-row bg-yellow-300 w-full h-[180px] border border-black rounded-md gap-2">
            {/* image */}
            <div className=" bg-white w-[350px] rounded-l-md "></div>
            {/* business detail */}
            <div className="bg-white w-full rounded-r-md"></div>
          </div>
        </div>
        <div className="border-2 border-black basis-1/3">maps</div>
      </div>
    </div>
  );
}

export default SearchPage;
