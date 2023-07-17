import React from "react";
import SideBar from "../components/sideBar";
import HomeNavbar from "../components/HomeNavbar";
const AddFreelancer = ()=>{
    return(
        <div className="min-h-full h-screen w-full bg-black fixed ">
<HomeNavbar/>
            <div className="h-full w-full flex text-white gap-10">
                
                
                <SideBar/>
                <div>
                    <h1>add</h1>
                </div>


            </div>

        </div>

    )
}

export default AddFreelancer;