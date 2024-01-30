import React from "react";
import stock from "../assets/pexels-anna-nekrashevich-6802042.jpg";

export default function Analytics () {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-[1240px] mx-auto grid md:grid-cols-2">
        <img src={stock} alt=""
        className="w-[500px] max-auto my-4"
        
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-4xl sm:text-3xl  text-bold py-2">Manage Data Analytics Centrally</h1>
          <p className="px-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minima
            laboriosam optio in enim consequuntur, recusandae, dignissimos aut
            voluptas deleniti non dolorum sint delectus quae reprehenderit nobis
            mollitia iure esse!
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' >Get Started</button>
        </div>
      </div>
    </div>
  );
}
