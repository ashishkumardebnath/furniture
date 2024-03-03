import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("bestSellers.json")
      .then((res) => res.json())
      .then((data) => setBestSellers(data));
  }, []);
  return (
    <div className="mb-28">
      <h5 className="lg:text-5xl text-4xl font-semibold">Best Sellers</h5>
      <p className="font-sans font-medium text-gray-500">
        Most Selling Product
      </p>
      <div className="grid lg:grid-cols-3 gap-x-20 gap-y-10 mt-12">
        {bestSellers.map((bestSeller) => (
          <div key={bestSeller.id}>
            <div className="group">
              <div className="relative overflow-hidden">
                <img src={bestSeller.img} alt="" />
                <div className="absolute h-full w-full flex justify-center items-center -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500  ">
                  <button className="bg-gray-200 text-gray-500 hover:border-2 hover:border-black/40 py-2 px-5 mt-80 flex items-center gap-2">
                    <BsCart4 />
                    Add to Cart
                  </button>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mt-4">{bestSeller.name}</h2>
              <div className="flex items-center gap-3 ">
                <h1 className="text-lg font-sans font-medium">
                  {bestSeller.price}
                </h1>
                <p className="line-through ">{bestSeller.mainPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
