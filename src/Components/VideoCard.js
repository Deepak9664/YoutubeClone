import React from 'react'

const VideoCard = (props) => {
  console.log("info",props.info)
    //   const {snippet,statistics} = props.info;
    //   const{channelTitle,title,thumbnails} = props.info.snippet;
    //do optional chaining to solve the undefined error
  return( 
  <div className='p-2 m-2 w-72 shadow-lg'>
         <img  className='rounded-lg'alt="videos" src={props?.info?.snippet?.thumbnails?.medium?.url}/> 
   <ul>
    <li className='font-bold py-2'>
        {props?.info?.snippet?.title}
    </li>
    <li>
        {props?.info?.snippet?.channelTitle}
    </li>
    <li>
        {props?.info?.statistics?.viewCount}
    </li>
</ul>     
    </div>
  
)}

export default VideoCard
