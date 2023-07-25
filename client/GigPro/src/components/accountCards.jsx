import React from "react";
import { useState } from "react";
import { useContractWrite } from "wagmi";
import { GigProContract } from "../Constant/gigprocontract";
import gigproAbi from "../ABI/GigPro.json";
import { ethers } from "ethers";
const AccountCards = () => {
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
    <div className="flex justify-between gap-16 w-full h-full">
  <div className="w-full h-full flex flex-col justify-between rounded-xl bg-gray-800">
    <h2 className="text-center text-xl font-semibold mb-5">Celo to Celox</h2>
    <div className="flex h-full flex-col gap-20 pt-5">
     
      <div className="flex justify-evenly items-center">
        <h3>CELO:</h3>
        <input className="border-b w-40 border-black bg-transparent focus:border-none text-center " type="text" placeholder="4000" onChange={(e)=>{setAmount(e.target.value)}}/>
      </div>
      <div className="flex justify-center items-center text-black pl-10 pr-10">
        <button className="inline-flex p-2 justify-center items-center w-20 rounded-full bg-red-200">Convert</button>
        
      </div>
    </div>
  </div>

  <div className="w-full h-full flex flex-col justify-between rounded-xl bg-gray-800">
    <h2 className="text-center text-xl font-semibold mb-5">Celox to Celo</h2>
    <div className="flex h-full flex-col gap-20 pt-5">
     
      <div className="flex justify-evenly items-center">
        <h3>CELOx:</h3>
        <input className="border-b border-black bg-transparent w-40 focus:border-none text-center " type="text" placeholder="4000" onChange={(e)=>{setAmount(e.target.value)}}/>
      </div>
      <div className="flex justify-center items-center text-black pl-10 pr-10">
        <button className="inline-flex p-2 justify-center items-center w-20 rounded-full bg-red-200">Convert</button>
        
      </div>
    </div>
  </div>
</div>

  );
};

export default AccountCards;
