import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch=useDispatch();

  const Togglemenu=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img onClick={()=>Togglemenu()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/512/3388/3388823.png"
        />
        <img
          className="h-8 mx-2"
          alt="Youtube"
          src="https://seeklogo.com/images/Y/youtube-2017-icon-logo-D1FE045118-seeklogo.com.png"
        />
      </div>
      <div className="col-span-10 text-center">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full bg-slate-100">Search</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRODr8ojk1iGz8kJ8I7iKbPgSgjqsP7i0NAyNPRU&s"
        />
      </div>
    </div>
  );
};

export default Head;
