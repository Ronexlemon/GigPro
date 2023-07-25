// import {
//   Card,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
// } from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
//   HomeIcon
// } from "@heroicons/react/24/solid";
import React from "react";
import {Navigate, useNavigate} from "react-router-dom"
 
export default function SideBar() {
  const navigate = useNavigate();
  return (
     
        <div className="flex  h-full w-1/6  bg-gray-800 pd pb-16 mb-40">
          <div className="flex flex-col p-5 gap-10 shadow-lg fixed">
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.8" viewBox="0 0 72 72" fill="none">
  <path d="M36 0C35.2159 5.10998e-05 34.4629 0.307125 33.9023 0.855469L1.17773 27.6211C1.13994 27.6495 1.10282 27.6788 1.06641 27.709L0.955078 27.8027V27.8086C0.654188 28.0889 0.41414 28.4281 0.249841 28.8051C0.0855421 29.182 0.000501223 29.5888 0 30C0 30.7956 0.31607 31.5587 0.87868 32.1213C1.44129 32.6839 2.20435 33 3 33H6V66C6 69.315 8.685 72 12 72H60C63.315 72 66 69.315 66 66V33H69C69.7956 33 70.5587 32.6839 71.1213 32.1213C71.6839 31.5587 72 30.7956 72 30C72.0003 29.5878 71.9156 29.1799 71.7513 28.8019C71.587 28.4238 71.3465 28.0837 71.0449 27.8027L70.998 27.7676C70.9322 27.7079 70.8638 27.6512 70.793 27.5977L66 23.6777V12C66 10.344 64.656 9 63 9H60C58.344 9 57 10.344 57 12V16.3184L38.0332 0.802734C37.4805 0.288978 36.7546 0.002356 36 0ZM45 39H57V63H45V39Z" fill="#F9D978"/>
</svg></span>
<button onClick={()=>{navigate("/home")}} className="text-orange-500 font-inter text-base font-medium">Home</button>
            </div>
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M20 13.4535V1.77486C20 1.31258 19.5223 0.940674 18.9286 0.940674H4.28571C1.91964 0.940674 0 2.43527 0 4.27744V15.4C0 17.2422 1.91964 18.7367 4.28571 18.7367H18.9286C19.5223 18.7367 20 18.3648 20 17.9026V17.3464C20 17.0857 19.8438 16.8494 19.6027 16.6965C19.4152 16.1612 19.4152 14.6353 19.6027 14.1C19.8438 13.9506 20 13.7142 20 13.4535ZM5.71429 5.59824C5.71429 5.48354 5.83482 5.38969 5.98214 5.38969H15.4464C15.5938 5.38969 15.7143 5.48354 15.7143 5.59824V6.2934C15.7143 6.4081 15.5938 6.50195 15.4464 6.50195H5.98214C5.83482 6.50195 5.71429 6.4081 5.71429 6.2934V5.59824ZM5.71429 7.82275C5.71429 7.70805 5.83482 7.6142 5.98214 7.6142H15.4464C15.5938 7.6142 15.7143 7.70805 15.7143 7.82275V8.51791C15.7143 8.63261 15.5938 8.72646 15.4464 8.72646H5.98214C5.83482 8.72646 5.71429 8.63261 5.71429 8.51791V7.82275ZM17.0268 16.5122H4.28571C3.49554 16.5122 2.85714 16.0152 2.85714 15.4C2.85714 14.7882 3.5 14.2877 4.28571 14.2877H17.0268C16.942 14.8821 16.942 15.9179 17.0268 16.5122Z" fill="#F6A13D"/>
</svg></span>
<h3 className="text-orange-500 font-inter text-base font-medium">Freelancer</h3>
            </div>

            <div className="pl-5 flex flex-col gap-2 ">
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M20 13.4535V1.77486C20 1.31258 19.5223 0.940674 18.9286 0.940674H4.28571C1.91964 0.940674 0 2.43527 0 4.27744V15.4C0 17.2422 1.91964 18.7367 4.28571 18.7367H18.9286C19.5223 18.7367 20 18.3648 20 17.9026V17.3464C20 17.0857 19.8438 16.8494 19.6027 16.6965C19.4152 16.1612 19.4152 14.6353 19.6027 14.1C19.8438 13.9506 20 13.7142 20 13.4535ZM5.71429 5.59824C5.71429 5.48354 5.83482 5.38969 5.98214 5.38969H15.4464C15.5938 5.38969 15.7143 5.48354 15.7143 5.59824V6.2934C15.7143 6.4081 15.5938 6.50195 15.4464 6.50195H5.98214C5.83482 6.50195 5.71429 6.4081 5.71429 6.2934V5.59824ZM5.71429 7.82275C5.71429 7.70805 5.83482 7.6142 5.98214 7.6142H15.4464C15.5938 7.6142 15.7143 7.70805 15.7143 7.82275V8.51791C15.7143 8.63261 15.5938 8.72646 15.4464 8.72646H5.98214C5.83482 8.72646 5.71429 8.63261 5.71429 8.51791V7.82275ZM17.0268 16.5122H4.28571C3.49554 16.5122 2.85714 16.0152 2.85714 15.4C2.85714 14.7882 3.5 14.2877 4.28571 14.2877H17.0268C16.942 14.8821 16.942 15.9179 17.0268 16.5122Z" fill="#F6A13D"/>
</svg></span>
<button onClick={()=>{navigate("/add")}} className="text-gray-300 font-inter text-sm font-light">Add</button>
            </div>
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.8" viewBox="0 0 90 90" fill="none">
  <path d="M45 9C25.2 9 9 25.2 9 45C9 64.8 25.2 81 45 81C64.8 81 81 64.8 81 45C81 25.2 64.8 9 45 9ZM59.193 63C58.533 63 58.203 62.67 57.543 62.34C52.593 59.367 46.323 57.72 39.723 57.72C36.093 57.72 32.133 58.38 28.833 59.04C28.173 59.04 27.513 59.37 27.183 59.37C25.863 59.37 24.873 58.38 24.873 57.06C24.873 55.74 25.533 54.75 26.853 54.75C31.143 53.76 35.436 53.1 40.056 53.1C47.646 53.1 54.576 55.08 60.516 58.38C61.176 59.04 61.836 59.37 61.836 60.69C61.17 62.34 60.18 63 59.193 63ZM62.82 53.763C62.16 53.763 61.5 53.433 60.84 53.103C55.23 49.473 47.307 47.493 38.73 47.493C34.44 47.493 30.477 48.153 27.51 48.813C26.85 49.143 26.52 49.143 25.86 49.143C24.21 49.143 23.217 47.823 23.217 46.5C23.217 44.85 23.877 44.19 25.527 43.527C29.487 42.537 33.45 41.547 39.06 41.547C48.3 41.547 56.88 43.857 64.143 48.147C65.133 48.807 65.793 49.797 65.793 50.79C65.46 52.44 64.473 53.763 62.82 53.763ZM67.11 43.2C66.45 43.2 66.12 42.87 65.13 42.54C58.53 38.91 48.96 36.6 39.72 36.6C35.1 36.6 30.15 37.26 25.857 38.25C25.197 38.25 24.867 38.58 23.877 38.58C21.897 38.913 20.577 37.26 20.577 35.283C20.577 33.306 21.567 32.31 22.887 31.983C28.17 30.66 33.78 30 39.72 30C49.95 30 60.51 32.31 68.763 36.6C69.753 37.26 70.743 38.25 70.743 39.9C70.413 41.88 69.09 43.2 67.11 43.2Z" fill="#F9D978"/>
</svg></span>
<button onClick={()=>{navigate("/stream")}} className="text-gray-300 font-inter text-sm font-light">Stream</button>
            </div>
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M20 13.4535V1.77486C20 1.31258 19.5223 0.940674 18.9286 0.940674H4.28571C1.91964 0.940674 0 2.43527 0 4.27744V15.4C0 17.2422 1.91964 18.7367 4.28571 18.7367H18.9286C19.5223 18.7367 20 18.3648 20 17.9026V17.3464C20 17.0857 19.8438 16.8494 19.6027 16.6965C19.4152 16.1612 19.4152 14.6353 19.6027 14.1C19.8438 13.9506 20 13.7142 20 13.4535ZM5.71429 5.59824C5.71429 5.48354 5.83482 5.38969 5.98214 5.38969H15.4464C15.5938 5.38969 15.7143 5.48354 15.7143 5.59824V6.2934C15.7143 6.4081 15.5938 6.50195 15.4464 6.50195H5.98214C5.83482 6.50195 5.71429 6.4081 5.71429 6.2934V5.59824ZM5.71429 7.82275C5.71429 7.70805 5.83482 7.6142 5.98214 7.6142H15.4464C15.5938 7.6142 15.7143 7.70805 15.7143 7.82275V8.51791C15.7143 8.63261 15.5938 8.72646 15.4464 8.72646H5.98214C5.83482 8.72646 5.71429 8.63261 5.71429 8.51791V7.82275ZM17.0268 16.5122H4.28571C3.49554 16.5122 2.85714 16.0152 2.85714 15.4C2.85714 14.7882 3.5 14.2877 4.28571 14.2877H17.0268C16.942 14.8821 16.942 15.9179 17.0268 16.5122Z" fill="#F6A13D"/>
</svg></span>
<button onClick={()=>{navigate("/manage")}} className="text-gray-300 font-inter text-sm font-light">Manage</button>
            </div>
            </div>
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M20 13.4535V1.77486C20 1.31258 19.5223 0.940674 18.9286 0.940674H4.28571C1.91964 0.940674 0 2.43527 0 4.27744V15.4C0 17.2422 1.91964 18.7367 4.28571 18.7367H18.9286C19.5223 18.7367 20 18.3648 20 17.9026V17.3464C20 17.0857 19.8438 16.8494 19.6027 16.6965C19.4152 16.1612 19.4152 14.6353 19.6027 14.1C19.8438 13.9506 20 13.7142 20 13.4535ZM5.71429 5.59824C5.71429 5.48354 5.83482 5.38969 5.98214 5.38969H15.4464C15.5938 5.38969 15.7143 5.48354 15.7143 5.59824V6.2934C15.7143 6.4081 15.5938 6.50195 15.4464 6.50195H5.98214C5.83482 6.50195 5.71429 6.4081 5.71429 6.2934V5.59824ZM5.71429 7.82275C5.71429 7.70805 5.83482 7.6142 5.98214 7.6142H15.4464C15.5938 7.6142 15.7143 7.70805 15.7143 7.82275V8.51791C15.7143 8.63261 15.5938 8.72646 15.4464 8.72646H5.98214C5.83482 8.72646 5.71429 8.63261 5.71429 8.51791V7.82275ZM17.0268 16.5122H4.28571C3.49554 16.5122 2.85714 16.0152 2.85714 15.4C2.85714 14.7882 3.5 14.2877 4.28571 14.2877H17.0268C16.942 14.8821 16.942 15.9179 17.0268 16.5122Z" fill="#F6A13D"/>
</svg></span>
<h3 className="text-orange-500 font-inter text-base font-medium">My Freelancer</h3>
            </div>

            <div className="pl-5 flex flex-col gap-2 ">
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M20 13.4535V1.77486C20 1.31258 19.5223 0.940674 18.9286 0.940674H4.28571C1.91964 0.940674 0 2.43527 0 4.27744V15.4C0 17.2422 1.91964 18.7367 4.28571 18.7367H18.9286C19.5223 18.7367 20 18.3648 20 17.9026V17.3464C20 17.0857 19.8438 16.8494 19.6027 16.6965C19.4152 16.1612 19.4152 14.6353 19.6027 14.1C19.8438 13.9506 20 13.7142 20 13.4535ZM5.71429 5.59824C5.71429 5.48354 5.83482 5.38969 5.98214 5.38969H15.4464C15.5938 5.38969 15.7143 5.48354 15.7143 5.59824V6.2934C15.7143 6.4081 15.5938 6.50195 15.4464 6.50195H5.98214C5.83482 6.50195 5.71429 6.4081 5.71429 6.2934V5.59824ZM5.71429 7.82275C5.71429 7.70805 5.83482 7.6142 5.98214 7.6142H15.4464C15.5938 7.6142 15.7143 7.70805 15.7143 7.82275V8.51791C15.7143 8.63261 15.5938 8.72646 15.4464 8.72646H5.98214C5.83482 8.72646 5.71429 8.63261 5.71429 8.51791V7.82275ZM17.0268 16.5122H4.28571C3.49554 16.5122 2.85714 16.0152 2.85714 15.4C2.85714 14.7882 3.5 14.2877 4.28571 14.2877H17.0268C16.942 14.8821 16.942 15.9179 17.0268 16.5122Z" fill="#F6A13D"/>
</svg></span>
<button onClick={()=>{navigate("/myFreelancer")}} className="text-gray-300 font-inter text-sm font-light">FreeLancers</button>
            </div>
            </div>
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M20 13.4535V1.77486C20 1.31258 19.5223 0.940674 18.9286 0.940674H4.28571C1.91964 0.940674 0 2.43527 0 4.27744V15.4C0 17.2422 1.91964 18.7367 4.28571 18.7367H18.9286C19.5223 18.7367 20 18.3648 20 17.9026V17.3464C20 17.0857 19.8438 16.8494 19.6027 16.6965C19.4152 16.1612 19.4152 14.6353 19.6027 14.1C19.8438 13.9506 20 13.7142 20 13.4535ZM5.71429 5.59824C5.71429 5.48354 5.83482 5.38969 5.98214 5.38969H15.4464C15.5938 5.38969 15.7143 5.48354 15.7143 5.59824V6.2934C15.7143 6.4081 15.5938 6.50195 15.4464 6.50195H5.98214C5.83482 6.50195 5.71429 6.4081 5.71429 6.2934V5.59824ZM5.71429 7.82275C5.71429 7.70805 5.83482 7.6142 5.98214 7.6142H15.4464C15.5938 7.6142 15.7143 7.70805 15.7143 7.82275V8.51791C15.7143 8.63261 15.5938 8.72646 15.4464 8.72646H5.98214C5.83482 8.72646 5.71429 8.63261 5.71429 8.51791V7.82275ZM17.0268 16.5122H4.28571C3.49554 16.5122 2.85714 16.0152 2.85714 15.4C2.85714 14.7882 3.5 14.2877 4.28571 14.2877H17.0268C16.942 14.8821 16.942 15.9179 17.0268 16.5122Z" fill="#F6A13D"/>
</svg></span>
<h3 className="text-orange-500 font-inter text-base font-medium">Account</h3>
            </div>

            <div className="pl-5 flex flex-col gap-2 ">
            <div className="flex gap-4">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M20 13.4535V1.77486C20 1.31258 19.5223 0.940674 18.9286 0.940674H4.28571C1.91964 0.940674 0 2.43527 0 4.27744V15.4C0 17.2422 1.91964 18.7367 4.28571 18.7367H18.9286C19.5223 18.7367 20 18.3648 20 17.9026V17.3464C20 17.0857 19.8438 16.8494 19.6027 16.6965C19.4152 16.1612 19.4152 14.6353 19.6027 14.1C19.8438 13.9506 20 13.7142 20 13.4535ZM5.71429 5.59824C5.71429 5.48354 5.83482 5.38969 5.98214 5.38969H15.4464C15.5938 5.38969 15.7143 5.48354 15.7143 5.59824V6.2934C15.7143 6.4081 15.5938 6.50195 15.4464 6.50195H5.98214C5.83482 6.50195 5.71429 6.4081 5.71429 6.2934V5.59824ZM5.71429 7.82275C5.71429 7.70805 5.83482 7.6142 5.98214 7.6142H15.4464C15.5938 7.6142 15.7143 7.70805 15.7143 7.82275V8.51791C15.7143 8.63261 15.5938 8.72646 15.4464 8.72646H5.98214C5.83482 8.72646 5.71429 8.63261 5.71429 8.51791V7.82275ZM17.0268 16.5122H4.28571C3.49554 16.5122 2.85714 16.0152 2.85714 15.4C2.85714 14.7882 3.5 14.2877 4.28571 14.2877H17.0268C16.942 14.8821 16.942 15.9179 17.0268 16.5122Z" fill="#F6A13D"/>
</svg></span>
<button onClick={()=>{navigate("/celo-celox")}} className="text-gray-300 font-inter text-sm font-light">Celo ↔ Celox</button>
            </div>
            </div>

          </div>
            
            
            
        </div>
    );
}