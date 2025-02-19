import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  decreamentQuantity,
  deletItem,
  increamentQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { Link } from "react-router-dom";
const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deletItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img className="w-32 h-32 object-cover" src={item.image} alt="" />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="w-52 flex items-center border p-3 justify-between text-gray-500 gap-4">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                    onClick={() =>
                      dispatch(
                        decreamentQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                  className="border h-5 font-normal text-lg flex items-center
                 justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active: bg-black"
                >
                  -
                </span>
                {item.quantity}
                <span
                  onClick={() =>
                      dispatch(
                        increamentQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                  className="border h-5 font-normal text-lg flex items-center
                 justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active: bg-black"
                >
                  +
                </span>
              </div>
            </div>
            <p className="w-14"> ${item.quantity * item.price} </p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty1")
        }
        className="bg-red-500 text-white mt-8 ml-7 px-6 py-1 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300 ">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
