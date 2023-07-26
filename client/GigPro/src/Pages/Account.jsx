import React from "react";
import SideBar from "../components/sideBar";
import HomeNavbar from "../components/HomeNavbar";
import AddCard from "../components/addCard";
import AccountCards from "../components/accountCards";
import Navbar from "../components/navBar";
import { ethers } from "ethers";
import {Framework} from "@superfluid-finance/sdk-core";
const Account = ()=>{
  
    return(
        <div className="min-h-full h-screen w-full bg-gray-900 fixed ">
<Navbar/>
            <div className="h-full w-full flex text-white gap-10">
                
                
                <SideBar/>
                <div className="w-1/2 h-1/2 m-20">
                    
                    <AccountCards/>
                </div>


            </div>

        </div>

    )
}

export default Account;