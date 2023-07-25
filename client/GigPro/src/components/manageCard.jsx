import React from "react";
import { useState } from "react";
import { useContractWrite,useContractRead } from "wagmi";
import { GigProContract } from "../Constant/gigprocontract";
import gigproAbi from "../ABI/GigPro.json";
import { useAccount } from 'wagmi'

const ManageCard = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data:myFreelancers, isError, isLoading } = useContractRead({
    address: GigProContract,
    abi: gigproAbi,
    functionName: 'getFreeLancersByOwner',
    args: [address]
  })
  console.log("addressis:,",myFreelancers);
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
      {myFreelancers.map((employee, index) => (
        <div key={index} className="flex h-full flex-col gap-4 text-gray-400 mb-4 border-b border-red-300">
          <div className="flex justify-evenly w-full gap-4 items-center">
            <h3>FreeLancer Address: </h3>
            <span className="">
            {employee.userAddress}
            </span>
            
          </div>
          <div className="flex  justify-stretch w-full gap-4 items-center">
            <h3>Amount in CELO: </h3>
            <span className="">{Number(employee.payAmount)}</span>
            
          </div>
          <div className="flex justify-between items-center text-black">
            <button className="inline-flex p-2 justify-start items-center w-100 rounded-full text-red-500">
              Revoke
            </button>
            
          </div>
        </div>
      ))}
    </>
  );
};

export default ManageCard;
