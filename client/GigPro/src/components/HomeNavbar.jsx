import React from "react";
import { useNavigate } from "react-router-dom";

const HomeNavbar = ()=>{
    const navigate = useNavigate();

    return(
        <div className="h-10 w-full flex justify-between items-center text-white p-10">
<div>
<h2>GigPro</h2>
</div>
<button onClick={()=>{navigate("/add")}} className=" justify-center bg-gray-300 h-8 rounded gap-10  text-sm text-orange-400">
    Manage
</button>
        </div>

    )
}
export default HomeNavbar;