import React,{useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { abbreviateNumber } from 'js-abbreviation-number'
import { FetchDataApi } from '../../utils/Api'
import { Context } from '../context/ContextApi'
import SuggestionVideo from "./SuggestionVideo"

const VideoDetail = () => {
  const[video,setVideo] = useState();
  const[relatedVideo,setRelatedVideos] = useState();
  const { setLoading } = useContext(Context);
  const {id} = useParams();

  useEffect(()=>
    {
      document.getElementById("root").classList.add("custom-h");
     // fetchVideoDetails();
      fetchRelatedDetails();
    }
  ,[id])

  const fetchVideoDetails = () =>
  {
    setLoading(true);
    FetchDataApi(`video/details/?id=${id}`).then((res)=>{
      console.log (res);
      setVideo(res);
      setLoading(false);
    })
  }
  const fetchRelatedDetails = () =>
    {
      setLoading(true);
      FetchDataApi(`video/related-contents/?id=${id}`).then((res)=>{
        console.log(res );
        setRelatedVideos(res);
        setLoading(false);
      })
    }

  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] bg-black'>
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className='flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto'>
          <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
            <ReactPlayer
              url = {`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="120%"
              style = {{backgroundColor:"black"}}
            />
          </div>
          <div className='text-white font-bold text-sm md:text-xl mt-4 line-clamp-2'>
            {/* //video title */}
          </div>
          <div className='flex justify-between flex-col md:flex-row mt-4 '>
              <div className='flex'>
                  <div className='flex h-11 w-11 rounded-full overflow-hidden'>
                    {/* <img className = "h-full w-full object-cover" src = {video?.author?.avtar[0].url}></img> */}
                  </div>
              </div>
          </div>
        </div>

        <div className='flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]'>
          {relatedVideo?.contents?.map((item, index)=>{
            if(item.type !== "video" )return false;
            return <SuggestionVideo key={index} video= {item.video}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
