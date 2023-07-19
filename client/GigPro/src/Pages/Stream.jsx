import React from "react";
import SideBar from "../components/sideBar";
import HomeNavbar from "../components/HomeNavbar";
import StreamCard from "../components/streamcards";
import Navbar from "../components/navBar";
const Stream = ()=>{
    return(
        <div className="min-h-full h-screen w-full bg-black fixed ">
<Navbar/>
            <div className="h-full w-full flex text-white gap-10">
                
                
                <SideBar/>
                
                    <div className="flex flex-col ml-20     ">
                    <StreamCard/>
                    </div>
                   
                


            </div>

        </div>

    )
}

export default Stream;