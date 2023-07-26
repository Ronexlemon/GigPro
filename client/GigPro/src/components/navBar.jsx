import React from "react";
import { Web3Button } from "@web3modal/react";
import { useNavigate } from "react-router-dom";
const Navbar = ()=>{
    const navigate = useNavigate();
    return(
        <div className="h-10 w-full flex justify-between items-center text-white  ">
<div className=" animate-pulse p-5">
<button onClick={()=>{navigate("/home")}}>GigPro</button>
</div>
<div className="p-5 pt-10">
<Web3Button themeVariables={{
    '--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-accent-color': '#FF0000.'
  }}/>
</div>

        </div>

    )
}
export default Navbar;