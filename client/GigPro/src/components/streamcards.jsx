import React from "react";

const StreamCard = () => {
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
      {employess.map((employee, index) => (
        <div key={index} className="flex h-full flex-col gap-4 text-white mb-4 border-b border-red-300">
          <div className="flex justify-evenly w-full gap-4 items-center">
            <h3>FreeLancer Address: </h3>
            <span className="text-orange-400">
            {employee.address}
            </span>
            
          </div>
          <div className="flex  justify-stretch w-full gap-4 items-center">
            <h3>Amount in Cusd: </h3>
            <span className="text-orange-400">{employee.amount}</span>
            
          </div>
          <div className="flex justify-between items-center text-black">
            <button className="inline-flex p-2 justify-center items-center w-100 rounded-full text-red-500">
              End Stream
            </button>
            <button className="inline-flex p-2 justify-center items-center w-100 rounded-full text-green-400">
              Start Stream
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default StreamCard;
