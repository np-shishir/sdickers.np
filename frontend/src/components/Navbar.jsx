import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/logout");

      localStorage.removeItem("token");

      alert("Logged out successfully");

      setIsLoggedIn(false);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="h-12.5 w-screen bg-black text-white flex justify-between text-[11px] sticky top-0 z-50">
      {/* Left */}
      <div className="flex justify-between items-center">
        <div
          className="font-sans font-extrabold px-8 text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          SDICKERS
        </div>

        <ul className="flex gap-x-11 text-[11px]">
          <li className="hover:text-[#00ff66] cursor-pointer duration-500">
            DROPS
          </li>
          <li className="hover:text-[#00ff66] cursor-pointer duration-500">
            COLLECTIONS
          </li>
          <li className="hover:text-[#00ff66] cursor-pointer duration-500">
            BEST SELLERS
          </li>
          <li className="hover:text-[#00ff66] cursor-pointer duration-500">
            COMMUNITY
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center text-2xl text-white mx-10 gap-x-4">
        {!isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="w-[90px] h-[30px] bg-white text-xs text-black font-semibold rounded-full hover:bg-black hover:text-[#00ff66] hover:outline hover:outline-[#00ff66] duration-300 cursor-pointer"
            >
              LOG IN
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="w-[90px] h-[30px] bg-[#00ff66] text-xs text-black font-semibold rounded-full hover:bg-black hover:text-[#00ff66] hover:outline hover:outline-[#00ff66] duration-300 cursor-pointer"
            >
              SIGN UP
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="w-[100px] h-[30px] bg-red-600 text-xs text-white font-semibold rounded-full hover:bg-black hover:text-red-500 hover:outline hover:outline-red-500 duration-300 cursor-pointer"
          >
            LOG OUT
          </button>
        )}

        <FaSearch className="cursor-pointer hover:text-[#00ff66]" />
        <FaShoppingCart className="cursor-pointer hover:text-[#00ff66]" />
      </div>
    </div>
  );
}
