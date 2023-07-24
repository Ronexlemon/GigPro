import React from "react";
import { Web3Button } from "@web3modal/react";
const Navbar = ()=>{
    return(
        <div className="h-10 w-full flex justify-between items-center text-white ">
<div>
<h2>GigPro</h2>
</div>
<Web3Button/>
        </div>

    )
}
export default Navbar;