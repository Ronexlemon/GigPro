import React from "react";
import SideBar from "../components/sideBar";
import HomeNavbar from "../components/HomeNavbar";
import MyFreelancerCard from "../components/myfreelancerCard";
const MyFreeLancers = ()=>{
    return(
        <div className="min-h-full h-screen w-full bg-black fixed ">
<HomeNavbar/>
            <div className="h-full w-full flex text-white gap-10">
                
                
                <SideBar/>
                <div className="flex flex-col ml-20     ">
                    <MyFreelancerCard/>
                </div>


            </div>

        </div>

    )
}

export default MyFreeLancers;