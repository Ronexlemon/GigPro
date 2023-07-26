import React from "react";
import { useState } from "react";
import { useContractWrite } from "wagmi";
import { GigProContract } from "../Constant/gigprocontract";
import gigproAbi from "../ABI/GigPro.json";
import { ethers } from "ethers";
import { Framework } from "@superfluid-finance/sdk-core";
import {celoABI } from "../ABI/abi";
const AccountCards = () => {
  const [approveAmount, setApproveAmount] = useState("");
  const [upgradeAmount, setUpgradeAmount] = useState("");
  const [downgradeAmount, setDowngradeAmount] = useState("");
  const [approve, setIsApprove] = useState(false);
  const [upgrade, setIsUpgrade] = useState(false);
  const [downgrade, setdowngrade] = useState(
    false
  );
    async function upgradeTokens(amount) {
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
        const celox= await sf.loadSuperToken("CELOx");
      
        console.log(celox);
      
        try {
          const upgradeOperation = celox.upgrade({
            amount: amount
          });
      
          console.log("Upgrading...");
      
          await upgradeOperation.exec(signer);
      
          console.log(
            `Congrats - you've just upgraded your tokens to an Index!
               Network: CELO
               Super Token: CELOx
               Amount: ${amount}         
            `
          );
      
          console.log(
            `Congrats - you've just distributed to your index!
          `
          );
        } catch (error) {
          console.log(
            "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
          );
          console.error(error);
        }
      }
      //another
      //where the Superfluid logic takes place
async function downgradeTokens(amount) {
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
    const celox = await sf.loadSuperToken("CELOx");
  
    console.log(celox);
  
    try {
      const downgradeOperation = celox.downgrade({
        amount: amount
      });
  
      console.log("downgrading...");
  
      await downgradeOperation.exec(signer);
  
      console.log(
        `Congrats - you've just downgraded your tokens
           Network: CELO
           Super Token: CELOx
           Amount: ${amount}         
        `
      );
  
      console.log(
        `Congrats - you've just downgraded
      `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }
  
  async function approveTokens(amount) {
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
  
    //CELOx on celo: you can find network addresses here: https://docs.superfluid.finance/superfluid/developers/networks
    //note that this abi is the one found here: https://goerli.etherscan.io/address/0x88271d333C72e51516B67f5567c728E702b3eeE8
    const CELO = new ethers.Contract(
      "0x471EcE3750Da237f93B8E339c536989b8978a438",//"0x671425ae1f272bc6f79bec3ed5c4b00e9c628240",
      celoABI,
      signer
    );
    try {
      console.log("approving celo spend");
      await CELO.approve(
        "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
        ethers.utils.parseEther(amount.toString())
      ).then(function (tx) {
        console.log(
          `Congrats, you just approved your Celo spend. You can see this tx at https://celo.etherscan.io/tx/${tx.hash}`
        );
      });
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }
  //handles

  const handleApproveAmountChange = (e) => {
    setApproveAmount( e.target.value);
    console.log(e.target.value);
  };
  const handleUpgradeAmountChange = (e) => {
    setUpgradeAmount(e.target.value);
  };

  const handleDowngradeAmountChange = (e) => {
    setDowngradeAmount(e.target.value);
  };
  return (
    <div className="flex justify-between gap-16 w-full h-full">
  <div className="w-full h-full flex flex-col justify-between rounded-xl bg-gray-800">
    <h2 className="text-center text-xl font-semibold mb-5">Celo to Celox</h2>
    <div className="flex h-full flex-col gap-20 pt-5">
     
      <div className="flex justify-evenly items-center">
        <h3>CELO:</h3>
        <input className="border-b w-40 border-black bg-transparent focus:border-none text-center " type="text" placeholder="4000" onChange={handleApproveAmountChange}/>
      </div>
      <div className="flex justify-center items-center text-black pl-10 pr-10">
      {approve?<button onClick={()=>{upgradeTokens(approveAmount)}} className="inline-flex p-2 justify-center items-center w-20 rounded-full bg-green-400">Wrap</button>:<button onClick={()=>{approveTokens(approveAmount);
      setTimeout(() => {
        setIsApprove(true);
      }, 1000);}} className="inline-flex p-2 justify-center items-center w-20 rounded-full bg-red-200">Approve</button>}
        
       
      </div>
    </div>
  </div>

  <div className="w-full h-full flex flex-col justify-between rounded-xl bg-gray-800">
    <h2 className="text-center text-xl font-semibold mb-5">Celox to Celo</h2>
    <div className="flex h-full flex-col gap-20 pt-5">
     
      <div className="flex justify-evenly items-center">
        <h3>CELOx:</h3>
        <input className="border-b border-black bg-transparent w-40 focus:border-none text-center " type="text" placeholder="4000" onChange={handleApproveAmountChange}/>
      </div>
      <div className="flex justify-center items-center text-black pl-10 pr-10">
      <button  className="inline-flex p-2 justify-center items-center w-20 rounded-full bg-red-200">Unwrap</button>
        
        
      </div>
    </div>
  </div>
</div>

  );
};

export default AccountCards;
