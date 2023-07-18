import React from "react";
import SideBar from "../components/sideBar";
import HomeNavbar from "../components/HomeNavbar";
import ManageCard from "../components/manageCard";
const Manage = ()=>{
    return(
        <div className="min-h-full h-screen w-full bg-black fixed ">
<HomeNavbar/>
            <div className="h-full w-full flex text-white gap-10">
                
                
                <SideBar/>
                <div className="flex flex-col ml-20     ">
                    <ManageCard/>
                </div>


            </div>

        </div>

    )
}

export default Manage;