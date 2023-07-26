import React from "react";
import { useState,useEffect } from "react";
import { useContractWrite,useContractRead } from "wagmi";
import { GigProContract } from "../Constant/gigprocontract";
import gigproAbi from "../ABI/GigPro.json";
import { useAccount } from 'wagmi'


const MyFreelancerCard = () => {
  const [freelancers,setFreeLancers] = useState([]);
  const [freeLancerAddress,setFreelancerAddress] = useState();
  const [deleteuser,setDeleteUser] = useState(true);
  const { address, isConnecting, isDisconnected } = useAccount()
  
  const { data:myFreelancers, isError, isLoading } = useContractRead({
    address: GigProContract,
    abi: gigproAbi,
    functionName: 'getFreeLancersByOwner',
    args: [address]
  })
  console.log("addressis:,",myFreelancers);

  const {writeAsync:removeFreeLancer} = useContractWrite({
    address: GigProContract,
    abi:gigproAbi,
    functionName:"removeFreeLancer",
    args:[freeLancerAddress,address]
  })
const removeFreeeLancer = async()=>{
  
  try{
   
     
      if(freeLancerAddress != undefined){
        await removeFreeLancer();
      }
      else{
        console.log("the address is not set");
      }
    

  }catch(err){
    console.log("err",err);
  }
}
  const employess = [
    { address: '0x8878787874827487vdfjdfywetf6f23276r', amount: '4000' },
    { address: '0x8878787874827487vdfjdfywetf6f23276r', amount: '4000' },
    { address: '0x8878787874827487vdfjdfywetf6f23276r', amount: '4000' },
    { address: '0x8878787874827487vdfjdfywetf6f23276r', amount: '4000' },
    { address: '0x8878787874827487vdfjdfywetf6f23276r', amount: '4000' },
    { address: '0x8878787874827487vdfjdfywetf6f23276r', amount: '4000' },
    { address: '0x8878787874827487vdfjdfywetf6f23276r', amount: '4000' },
    { address: '0x8878787874827487vdfjdfywetf6f23276r', amount: '4000' },
  ];
 
  return (
    <>
      {myFreelancers?.map((employee, index) => (
        <div key={index} className="flex h-full flex-col gap-2 text-gray-400 mb-0 border-b border-red-300">
          <div className="flex justify-evenly w-full gap-4 items-center">
            <h3>FreeLancer Address: </h3>
            <span className="">
            {employee.userAddress}
            </span>
            
          </div>
          <div className="flex  justify-stretch w-full gap-2 items-center">
            <h3>Amount in Cusd: </h3>
            <span className="">{Number(employee.payAmount)}</span>
            
          </div>
          <div className="flex justify-between items-center text-black">
            {deleteuser? <button onClick={()=>{setFreelancerAddress(employee.userAddress);setDeleteUser(false)}} className="inline-flex pl-2 justify-center items-center w-100 rounded-full text-red-500">
              End Contract
            </button>: <button onClick={()=>{removeFreeeLancer()}} className="inline-flex pl-2 justify-center items-center w-100 rounded-full text-yellow-500">
              Approve
            </button>}
          
           
            
            
          </div>
        </div>
      ))}
    </>
  );
};

export default MyFreelancerCard;
