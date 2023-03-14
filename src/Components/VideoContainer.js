import React, { useEffect, useState } from 'react'
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
      {videos.map(video=><VideoCard key = {video.id} info={video}/>)}
        
    </div>
  )
}

export default VideoContainer
