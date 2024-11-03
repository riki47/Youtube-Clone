import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import VideoLength from './VideoLength'

const SuggestionVideo = ({video}) => {
  return <Link to={`/video/${video?.videoId}`}>
      <div className="flex lg:flex-col mb-8 max-h-96">
        <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
          <img className = "h-full w-full object-cover" src = {video.thumbnails?.[0]?.url}/>
          {video.lengthSeconds && (
            <VideoLength  time = {video?.lengthSeconds}/>
          )}
        </div>
        <div className='flex text-white mt-3'>
          <div className="flex item-center">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img  className='h-full w-full object-cover' 
              src = {video?.author?.avatar[0]?.url}/>
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className=' text-sm font-bold line-clamp-2'>
              {video?.title}
            </span>
            <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex item-center flex-col'>
              <div>{video.author.title}</div>
              <div className='flex gap-5rem'>{`${abbreviateNumber(video.stats.views, 2)} views `}<span className='flex items-start mx-2'> <div>.</div> </span>{ video.publishedTimeText}</div>
            </span>
          </div>
        </div>
      </div>
    </Link>
}

export default SuggestionVideo
