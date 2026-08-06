import React, { useEffect, useState } from "react";
import axios from "axios";
import StickerCard from "../cards/StickerCard";

export default function MarketPlace() {
  const meterValue = 50;

  const [stickers, setStickers] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("");
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products", {
        params: {
          category: selectedCategory,
          sort,
        },
      });

      setStickers(response.data.data);

      // Get unique categories
      const uniqueCategories = [
        ...new Set(response.data.data.map((item) => item.productCategory)),
      ];

      setCategories(uniqueCategories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, sort]);
  return (
    <div className="w-screen min-h-screen bg-[#111111] py-12">
      {/* container */}
      <div className="flex w-full h-full">
        {/* menu */}
        <div className="w-[15%] flex flex-col items-center gap-y-14">
          {/* categories */}
          <div className="flex flex-col text-xs text-[#8a8a8a] gap-y-4 w-[60%]">
            <span className="font-semibold text-[#00ff66]">CATEGORIES</span>

            <span
              onClick={() => setSelectedCategory("")}
              className={`cursor-pointer ${
                selectedCategory === "" ? "text-[#00ff66]" : ""
              }`}
            >
              All
            </span>

            {categories.map((category) => (
              <span
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer ${
                  selectedCategory === category ? "text-[#00ff66]" : ""
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          {/* finish */}
          <div className="flex flex-col text-xs text-[#8a8a8a] gap-y-4 w-[60%]">
            <span className="font-semibold text-white">FINISH</span>
            <span className="opacity-50 cursor-not-allowed">Matte</span>
            <span className="opacity-50 cursor-not-allowed">Glossy</span>
            <span className="opacity-50 cursor-not-allowed">Holographic</span>
          </div>

          {/* availability */}
          <div className="flex flex-col text-xs text-[#8a8a8a] gap-y-4 w-[60%]">
            <span className="font-semibold text-white">AVAILABILITY</span>
            <span className="opacity-50 cursor-not-allowed">In Stock</span>
            <span className="opacity-50 cursor-not-allowed">Pre-Order</span>
          </div>
        </div>

        {/* shop */}
        <div className="flex flex-col w-[85%] px-16">
          {/* top */}
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
              <span className="text-2xl text-white font-semibold">
                SHOP ALL
              </span>
              <span className="text-xs text-[#515151]">
                Showing Premium Collectibles
              </span>
            </div>
            <div className="flex justify-center items-center">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-white text-xs font-semibold p-3 rounded-xl border border-[#2e2e2e] bg-[#181818]"
              >
                <option value="">MOST POPULAR</option>
                <option value="latest">LATEST</option>
                <option value="priceAsc">PRICE: LOW TO HIGH</option>
                <option value="priceDesc">PRICE: HIGH TO LOW</option>
              </select>
            </div>
          </div>

          {/* main shop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
            {stickers.map((item) => (
              <StickerCard
                key={item._id}
                stickerImage={item.productImage}
                stickerName={item.productName}
                collectionType={item.productCategory}
                stickerPrice={item.productPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
