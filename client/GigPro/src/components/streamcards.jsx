import React, { useState } from "react";
import { useContractWrite,useContractRead } from "wagmi";
import { GigProContract } from "../Constant/gigprocontract";
import gigproAbi from "../ABI/GigPro.json";
import { useAccount } from 'wagmi'

//superfluid
//import { Framework } from "@superfluid-finance/js-sdk";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers,BigNumber } from "ethers";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
let account;

const StreamCard = () => {
  const [cardIndex,setCardIndex] = useState(null);
  const [flowRate, setFlowRate] = useState("");
  const [flowRateDisplay, setFlowRateDisplay] = useState("");
  const [isOpen,setOpen] = useState(false);
  const [weiPerSeconds,setWeiPerSeconds] = useState();
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
  function calculateFlowRate(amount) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amount) === "number") {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = ethers.BigNumber.from(amount);
      const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
      const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }
  //hanle flow rate
  const handleFlowRateChange = (e) => {
    setFlowRate(() => ([e.target.name] = e.target.value));
    let newFlowRateDisplay = calculateFlowRate(e.target.value);
    setFlowRateDisplay(newFlowRateDisplay.toString());
  };


  async function createNewFlow(recipient) {
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
      const createFlowOperation =daix.createFlow({
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
/**end stream */

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
//handle new stream
    const handleStartStream = async(freeLancerAddress,wei_per_seconds)=>{
      try{
        if(freeLancerAddress != undefined ){
          
          await createNewFlow(freeLancerAddress);
          setOpen(false);
        }else{
          alert("please provide the time");
        }
       
      }catch(err){
        console.log("error is", err);
      }
    }
    //handle delete stream
    const handleEndStream = async(freeLancerAddress)=>{
      try{
        if(freeLancerAddress != undefined ){
          
          await endStreamFlow(freeLancerAddress);
          //setOpen(false);
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
          <div className="flex justify-between items-center ">
            <button onClick={()=>{handleEndStream(employee.userAddress)}} className="inline-flex p-2 justify-center items-center w-50 h-5 rounded-full text-sm  text-red-400">
              End Stream
            </button>
            <button onClick={()=>{handleEndStream(employee.userAddress)}} className="inline-flex p-2 justify-center items-center w-50 h-5 rounded-full text-sm text-teal-900">
              Update Stream
            </button>
            {cardIndex == index?  <div className="flex gap-8 ">
        
        <input
          type="number"
          placeholder="Wei"
          value={flowRate}
          onChange={handleFlowRateChange}
           className="text-black text-center"
        />
        <div className="button-container flex gap-8 text-sm">
        <h4>{flowRateDisplay !== " " ? flowRateDisplay : 0} Celox/month
          </h4>
          <button className="text-green-200 text-sm" onClick={()=>{handleStartStream(employee.userAddress,weiPerSeconds)}}>Start</button>
          <button className="text-red-200 text-sm" onClick={()=>{setCardIndex(null)}} >Cancel</button>
        </div>
      </div>: <button  onClick={()=>{setCardIndex(index)}} className="inline-flex p-2 justify-center items-center w-50 h-5 rounded-full text-sm  text-green-600">
              Start Stream
            </button>}

           
          </div>
         
        </div>
      ))}
    </>
  );
};

export default StreamCard;
