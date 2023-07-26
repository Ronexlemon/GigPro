import React from "react";
import { useNavigate } from "react-router-dom";

const HomeNavbar = ()=>{
    const navigate = useNavigate();

    return(
        <div className="h-10 w-full flex justify-between items-center text-white p-10 fixed">
<div>
<h2>GigPro</h2>
</div>

<button onClick={()=>{navigate("/add")}} className="px-8 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600">
              Get Started
            </button>
        </div>

    )
}
export default HomeNavbar;