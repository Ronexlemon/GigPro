import React from "react";
import SideBar from "../components/sideBar";
import HomeNavbar from "../components/HomeNavbar";
import AddCard from "../components/addCard";
const AddFreelancer = ()=>{
    return(
        <div className="min-h-full h-screen w-full bg-black fixed ">
<HomeNavbar/>
            <div className="h-full w-full flex text-white gap-10">
                
                
                <SideBar/>
                <div className="w-1/2 h-1/2 m-20">
                    
                    <AddCard/>
                </div>


            </div>

        </div>

    )
}

export default AddFreelancer;