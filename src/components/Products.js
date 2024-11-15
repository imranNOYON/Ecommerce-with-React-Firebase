import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({products}) => {
  console.log(products)
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="bg-black text-2xl text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel
          necessitatibus eligendi eius voluptatibus! Ratione quos quibusdam
          eveniet, odit, eius culpa aliquam dolor, voluptates illum magnam
          officiis necessitatibus libero distinctio!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4">
       {
        products.map((item)=>(
          <ProductsCard key={item._id} product={item}/>
        ))
       }
      </div>
    </div>
  );
};

export default Products;
