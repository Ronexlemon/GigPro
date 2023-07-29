import React from "react";
import { useState } from "react";
import { useContractWrite,useContractRead } from "wagmi";
import { GigProContract } from "../Constant/gigprocontract";
import gigproAbi from "../ABI/GigPro.json";
import { useAccount } from 'wagmi'
import {Framework} from "@superfluid-finance/sdk-core"
import {ethers} from "ethers"


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
//end stream
async function endStreamFlow(recipient) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();

  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const sf = await Framework.create({
    chainId: Number(chainId),
    provider: provider
  });

  const superSigner = sf.createSigner({ signer: signer });

  console.log(signer);
  console.log(await superSigner.getAddress());
  //const daix = await sf.loadSuperToken("MATICx");
  const daix = await sf.loadSuperToken("CELOx");
  

  console.log(daix);

  try {
    if (!provider) {
      console.log("Provider not initialized yet");
      return;
      }
    const deleteFlowOperation =daix.deleteFlow({
      sender: await superSigner.getAddress(),
      receiver: recipient,
      
      // userData?: string
    });

    console.log(deleteFlowOperation);
    console.log("Creating your stream...");

    const result = await deleteFlowOperation.exec(superSigner);
    console.log(result);

    console.log(
      `Congrats - you've just End Stream  a money stream!
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}
//handle delete stream
const handleEndStream = async(freeLancerAddress)=>{
  try{
    if(freeLancerAddress != undefined ){
      
      await endStreamFlow(freeLancerAddress);
      
      //setOpen(false);
    }else{
      alert("please provide the address");
    }
   
  }catch(err){
    console.log("error is", err);
  }
}
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
            <button onClick={()=>{handleEndStream(employee.userAddress)}}  className="inline-flex p-2 justify-start items-center w-100 rounded-full text-red-500">
              Revoke
            </button>
            
          </div>
        </div>
      ))}
    </>
  );
};

export default ManageCard;
