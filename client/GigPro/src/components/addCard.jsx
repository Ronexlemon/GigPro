import React from "react";

const AddCard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between rounded-xl bg-gray-400">
      <div className="flex h-full flex-col  gap-20 pt-5 ">
        <div className="flex justify-evenly items-center">
        <h3>FreeLancer Address:</h3>
        <input className="border-b border-green-300 bg-transparent focus:border-none text-center" type="text" placeholder="0x74....39749"/>
        </div>
        <div className="flex justify-evenly items-center">
        <h3>Amount in Cusd:</h3>
        <input className="border-b border-green-300 bg-transparent focus:border-none text-center " type="text" placeholder="4000"/>
        </div>
        <div className="flex  justify-between items-center text-black pl-10 pr-10">
        <button className="inline-flex p-2 justify-center items-center w-20 rounded-full bg-red-200">Cancel</button>
        <button className="inline-flex p-2 justify-center items-center w-20  rounded-full  bg-yellow-200">Add</button>
        </div>
       
        
       
      
      </div>
    </div>
  );
};

export default AddCard;
