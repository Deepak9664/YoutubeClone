import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const[suggestions,setSuggestion]=useState([]);
  const[showsuggestion,setshowSuggestion]=useState(false);
  useEffect(() => {
    //api call
    //make an api call after evrykeypress
    //but if the difference between 2 api call is <200 ms
    //decline the api call
   const Timer= setTimeout(() => getSearchapisuggestion(), 200);
    return ()=>{
      clearTimeout(Timer)
    }
  }, [searchQuery]);
/**
 * 
 key -i
 render the component
 useEffect()
 start timer =>make the api call after 200
 */
/**
 * ket-ip
 * destroy the component (useeffect return method)
 * useEffct()
 * start timer =>make api call after200 ms=>make api call
 */

  const getSearchapisuggestion = async () => {
    console.log("api call",searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log("JSON", json[1]);
    setSuggestion(json[1])
  };

  const dispatch = useDispatch();
  const Togglemenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => Togglemenu()}
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
      <div className="col-span-10 px-10">
        <div>
        <input
          className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setshowSuggestion(true)}
          onBlur={()=>setshowSuggestion(false)}
          
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-slate-100">
          Search
        </button>
        </div>
        {showsuggestion && (
        <div className="fixed bg-white py-2 px-2 w-[39rem] shadow-lg rounded-lg  border gray-100" >
          <ul>
            {suggestions.map((suggest)=><li key={suggest} className=" py-2 px-3 shadow-sm hover:bg-gray-100">
              {suggest}</li>)
              }
            </ul>
        </div>
        )}
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
