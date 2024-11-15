import React from "react";
import { bazar, cart } from "../assets";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28 mb-2" src={bazar} alt="" />
          </div>
        </Link>
        <div>
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer ">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Blog
            </li>
            <Link to="/cart">
              <div className="relative">
                <CiShoppingCart size={42} />
                <span className="absolute w-6 top-2 left-[9px] text-xl flex items-center justify-center font-semibold ">
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <div>
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    userInfo
                      ? userInfo.image
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmubQ2CWrLREqEPhbyTMCxc0O4R2RIC4c9I0VfJaDHKqwiz_zFku32zX-Ra9TPDWoAIg&usqp=CAU"
                  }
                  alt=""
                />
              </div>
            </Link>
            {userInfo && (
              <p className="text-base font-semibold underline underline-offset-2">
                {" "}
                {userInfo.name}{" "}
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
