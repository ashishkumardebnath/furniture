import { useEffect } from "react";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { BsCart4 } from "react-icons/bs";

const Collection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("collection.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);
  return (
    <div className="lg:mt-28 mt-14 lg:mb-28 mb-20">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="lg:text-5xl text-4xl font-semibold">
            Featured Collections
          </h5>
          <p className="font-sans font-medium text-gray-500">
            Most Selling and Trending Product
          </p>
        </div>
        <div>
          <h4 className="text-4xl font-sans font-medium text-gray-300 flex items-center gap-2">
            Go <GoArrowRight />
          </h4>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-x-20 gap-y-10 mt-12">
        {collections.map((collection) => (
          <div key={collection.id}>
            <div className="group">
              <div className="relative overflow-hidden">
                <img src={collection.img} alt="" />
                <div className="absolute h-full w-full flex justify-center items-center -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500  ">
                  <button className="bg-gray-200 text-gray-500 hover:border-2 hover:border-black/40 py-2 px-5 mt-80 flex items-center gap-2">
                    <BsCart4 />
                    Add to Cart
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-4">{collection.name}</h2>
              <div className="flex items-center gap-3 ">
                <h1 className="text-lg font-sans font-medium">
                  {collection.price}
                </h1>
                <p className="line-through ">{collection.mainPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
