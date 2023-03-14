import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {YOTUBE_VIDEOS_APT} from "../Utils/Constants";
import VideoCard from './VideoCard';
const VideoContainer = () => {
  const[videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos= async ()=>{
    const data = await fetch(YOTUBE_VIDEOS_APT);
    const json =  await data.json();
    // console.log("hhdhdh",json)
    setVideos(json.items)
  };
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=>(
    <Link to={"/watch?v="+video.id}> 
     <VideoCard key = {video.id} info={video}/>
    </Link>))
      }
        
    </div>
  )
}

export default VideoContainer
