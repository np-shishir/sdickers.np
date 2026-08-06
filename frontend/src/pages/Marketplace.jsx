import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { isLoggedIn } from "../auth";
import StickerCard from "../cards/StickerCard";
export default function Marketplace() {
  const navigate = useNavigate();
  const [stickers, setStickers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const fetchProducts = async () => {
    try {
      const response = await api.get("/products", {
        params: {
          category: selectedCategory,
          sort,
          search,
        },
      });
      setStickers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await api.get("/products");
      const uniqueCategories = [
        ...new Set(response.data.data.map((item) => item.productCategory)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    const t = setTimeout(fetchProducts, 300);
    return () => clearTimeout(t);
  }, [selectedCategory, sort, search]);
  const handleAddToCart = async (productId) => {
    if (!isLoggedIn()) {
      alert("Please log in to add items to your cart.");
      return navigate("/login");
    }
    try {
      await api.post("/cart/add", { productId, quantity: 1 });
      alert("Added to cart!");
    } catch (error) {
      alert(error.response?.data?.message || "Could not add to cart");
    }
  };
  return (
    <div className="w-screen min-h-screen bg-[#111111] py-12">
      <div className="flex w-full h-full">
        <div className="w-[15%] flex flex-col items-center gap-y-14">
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
          <div className="flex flex-col text-xs text-[#8a8a8a] gap-y-4 w-[60%]">
            <span className="font-semibold text-white">FINISH</span>
            <span className="opacity-50 cursor-not-allowed">Matte</span>
            <span className="opacity-50 cursor-not-allowed">Glossy</span>
            <span className="opacity-50 cursor-not-allowed">Holographic</span>
          </div>
          <div className="flex flex-col text-xs text-[#8a8a8a] gap-y-4 w-[60%]">
            <span className="font-semibold text-white">AVAILABILITY</span>
            <span className="opacity-50 cursor-not-allowed">In Stock</span>
            <span className="opacity-50 cursor-not-allowed">Pre-Order</span>
          </div>
        </div>
        <div className="flex flex-col w-[85%] px-16">
          <div className="flex justify-between w-full items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl text-white font-semibold">
                SHOP ALL
              </span>
              <span className="text-xs text-[#515151]">
                Showing Premium Collectibles
              </span>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search stickers..."
              className="flex-1 max-w-md h-11 px-4 text-sm text-white bg-[#181818] border border-[#2e2e2e] rounded-xl placeholder-[#515151] focus:border-[#00ff66] outline-none"
            />
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
          {stickers.length === 0 ? (
            <div className="text-[#8a8a8a] text-sm mt-16 text-center w-full">
              No stickers found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
              {stickers.map((item) => (
                <StickerCard
                  key={item._id}
                  id={item._id}
                  stickerImage={item.productImage}
                  stickerName={item.productName}
                  collectionType={item.productCategory}
                  stickerPrice={item.productPrice}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
