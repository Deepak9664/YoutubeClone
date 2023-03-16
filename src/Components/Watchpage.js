import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { closeMenu } from '../Utils/appSlice'
import CommentsContainer from './CommentsContainer'

const Watchpage = () => {
const [searcgParams]=useSearchParams();
 console.log("params",searcgParams.get("v"))  //.get will give the videoid


    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-row'>
    <div className='px-5'>
    <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searcgParams.get("v")}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullscreen>

    </iframe>
    <CommentsContainer/>
    </div>
    </div>
  )
}

export default Watchpage
