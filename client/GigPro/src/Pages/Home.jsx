import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import SideBar from "../components/sideBar";

const Home =()=>{
    return(
        <div className="min-h-full h-screen w-full bg-black  fixed">
            <HomeNavbar/>
            
            <div className="flex justify-center items-center  h-full w-full   ">

                <div className="h-1/2 w-1/2 border-r-8 bg-gray-200 text-red-500">
                    <h1>dnbfjnbjgfnbjgn</h1>

                </div>

            </div>

        </div>

    )
}

export default Home;