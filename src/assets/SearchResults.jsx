import React,{useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { FetchDataApi } from '../../utils/Api'
import { Context } from '../context/ContextApi'
import LeftNav from './LeftNav'
import SearchResultVideo from './SearchResultVideo'

const SearchResults = () => {
  const [result,setResult] = useState();
  const {searchQuery} = useParams();
  const {setLoading} = useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  },[searchQuery])

  const fetchSearchResults = () =>{
    setLoading(true);
    FetchDataApi(`search/?q=${searchQuery}`).then((res)=>
    {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
      <div className="bg-[url(src/assets/ytassets/mybgg.gif)] grow w-[calc(100%-240px)] h-full overflow-y-auto  bg-no-repeat bg-cover">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item)=>{
            if(item?.type !== "video") return false;
            let video = item?.video;
            return(
              <SearchResultVideo 
              key = {video?.videoId} 
              video = {video}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResults
