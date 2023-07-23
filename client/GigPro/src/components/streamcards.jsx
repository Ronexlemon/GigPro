import React, { useState } from "react";
import { useContractWrite,useContractRead } from "wagmi";
import { GigProContract } from "../Constant/gigprocontract";
import gigproAbi from "../ABI/GigPro.json";
import { useAccount } from 'wagmi'

//superfluid
//import { Framework } from "@superfluid-finance/js-sdk";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
let account;

const StreamCard = () => {
  const [isOpen,setOpen] = useState(false);
  const [timeInSeconds,setTimeInSeconds] = useState();
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
 

   async function createNewFlow(recipient, flowRate) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
    
      const signer = provider.getSigner();
    
      const {chainId} = await provider.getNetwork();
      console.log(chainId);
      const sf = await Framework.create({
        chainId: Number(chainId),
        provider: provider
      });
      console.log( sf);
    
      const superSigner = sf.createSigner({ signer: signer });
     // console.log(await superSigner);
    
      console.log("the signer is",signer);
      console.log(await superSigner.getAddress());
      const celox = await sf.loadSuperToken("CELOx");
      
    
      console.log(celox);
    
      try {
        const createFlowOperation = celox.createFlow({
          sender: await superSigner.getAddress(),
          receiver: recipient,
          flowRate: flowRate
          // userData?: string
        });
    
         console.log(createFlowOperation);
        console.log("Creating your stream...");
    
        const result = await createFlowOperation.exec(superSigner);
        console.log(result);
    
        console.log(
          `Congrats - you've just created a money stream!
        `
        );
      } catch (error) {
        console.log(
          "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
        );
        console.error(error);
      }
    }
    const handleStartStream = async(freeLancerAddress,time_in_seconds)=>{
      try{
        if(freeLancerAddress != undefined && time_in_seconds != undefined){
          await createNewFlow(freeLancerAddress,time_in_seconds);
          setOpen(false);
        }else{
          alert("please provide the time");
        }
       
      }catch(err){
        console.log("error is", err);
      }
    }

  return (
    <>
      {myFreelancers?.map((employee, index) => (
        <div key={index} className="flex h-full flex-col gap-4 text-white mb-4 border-b border-red-300">
          <div className="flex justify-evenly w-full gap-4 items-center">
            <h3>FreeLancer Address: </h3>
            <span className="text-orange-400">
            {employee.userAddress}
            </span>
            
          </div>
          <div className="flex  justify-stretch w-full gap-4 items-center">
            <h3>Amount in Cusd: </h3>
            <span className="text-orange-400">{Number(employee.payAmount)}</span>
            
          </div>
          <div className="flex justify-between items-center text-black">
            <button className="inline-flex p-2 justify-center items-center w-100 rounded-full text-red-500">
              End Stream
            </button>
            {isOpen?  <div className="flex gap-8 text-white">
        
        <input
          type="number"
          placeholder="Time in seconds"
           value={timeInSeconds}
           onChange={(e)=>{setTimeInSeconds(e.target.value)}}
           className="text-black text-center"
        />
        <div className="button-container flex gap-8">
          <button className="text-green-400" onClick={()=>{handleStartStream(employee.userAddress,timeInSeconds)}}>Start</button>
          <button className="text-red-400" onClick={()=>{setOpen(false)}} >Cancel</button>
        </div>
      </div>: <button  onClick={()=>{setOpen(true)}} className="inline-flex p-2 justify-center items-center w-100 rounded-full text-green-400">
              Start Stream
            </button>}

           
          </div>
         
        </div>
      ))}
    </>
  );
};

export default StreamCard;
