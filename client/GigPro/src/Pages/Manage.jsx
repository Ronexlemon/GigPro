import React from "react";
import SideBar from "../components/sideBar";
import HomeNavbar from "../components/HomeNavbar";
const Manage = ()=>{
    return(
        <div className="min-h-full h-screen w-full bg-black fixed ">
<HomeNavbar/>
            <div className="h-full w-full flex text-white gap-10">
                
                
                <SideBar/>
                <div>
                    <h1>Manage</h1>
                </div>


            </div>

        </div>

    )
}

export default Manage;