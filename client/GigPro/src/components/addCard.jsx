import React from "react";
import { useState } from "react";
import { useContractWrite } from "wagmi";
import { GigProContract } from "../Constant/gigprocontract";
import gigproAbi from "../ABI/GigPro.json";
import { ethers } from "ethers";
const AddCard = () => {
  const [freelancerAddress,setFreelancerAddress] = useState();
  const  [amount,setAmount] = useState();
  const {writeAsync:add} = useContractWrite({
    address: GigProContract,
    abi: gigproAbi,
    functionName: "addFreeLancer",
    args: [freelancerAddress ,amount]

  })
  const addFreelancer =async()=>{
    try{
      if(freelancerAddress != undefined && amount != undefined){
       await  add();
      }else{
        console.log("empty values");
      }

    }catch(error){
      console.log(error);
    }
  }
  console.log(freelancerAddress);
  return (
    <div className="w-full h-full flex flex-col justify-between rounded-xl bg-gray-400">
      <div className="flex h-full flex-col  gap-20 pt-5 ">
        <div className="flex justify-evenly items-center">
        <h3>FreeLancer Address:</h3>
        <input className="border-b border-black bg-transparent focus:border-none text-center" type="text" placeholder="0x74....39749" onChange={(e)=>{setFreelancerAddress(e.target.value)}}/>
        </div>
        <div className="flex justify-evenly items-center">
        <h3>Amount in Cusd:</h3>
        <input className="border-b border-black bg-transparent focus:border-none text-center " type="text" placeholder="4000" onChange={(e)=>{setAmount(e.target.value)}}/>
        </div>
        <div className="flex  justify-between items-center text-black pl-10 pr-10">
        <button className="inline-flex p-2 justify-center items-center w-20 rounded-full bg-red-200">Cancel</button>
        <button onClick={()=>{addFreelancer()}} className="inline-flex p-2 justify-center items-center w-20  rounded-full  bg-green-200">Add</button>
        </div>
       
        
       
      
      </div>
    </div>
  );
};

export default AddCard;
