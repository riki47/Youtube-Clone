import React,{useContext,useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'

import ytlogo from "./ytassets/yt-logo.png"
import ytlogomini from "./ytassets/yt-logo-mobile.png"

import { SlMenu } from 'react-icons/sl'
import { IoIosSearch } from 'react-icons/io'
import { RiVideoAddLine } from 'react-icons/ri'
import { FiBell } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

import { Context } from '../context/ContextApi'
import { BiLoader } from 'react-icons/bi'
import Loader from '../shared/Loader'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {loading,mobileMenu,setMobileMenu} = useContext(Context);

  const navigate = useNavigate();

  function searchThroughtSearch()
  {
    if(searchQuery?.length>0)
      navigate(`/searchResult/${searchQuery}`)
  }
  const searchQueryHandler = (event) =>{
    if((event?.key == "Enter") && searchQuery?.length>0)
    {
      navigate(`/searchResult/${searchQuery}`)
    }
  }

  const mobileMenuToggle = () =>{
    setMobileMenu(!mobileMenu)
  };

  const{pathname} = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0]


  return (
    <div className='sticky top-0 z-10 flex felx-row items-center justify-between h-24 px-4 md:px-5 bg-[#020010]'>
      {loading && <Loader/>}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]' onClick={mobileMenuToggle}>
            {mobileMenu ? 
            (<CgClose className='text-white text-xl'/>)
            :
            (<SlMenu className='text-white text-xl'/>)}
          </div>
        )}
        <Link to = "/" className='flex h-7 items-center'>
          <img className='h-full hidden md:block' src = {ytlogo}/>
          <img className='h-full md:hidden' src = {ytlogomini}/>
        </Link> 
      </div>
      <div className='group flex items-center'>
          <div className="flex h-8 md:h-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
              <IoIosSearch className='text-white text-xl'/>
            </div>
            <input type='text' 
              className='max-w-80 bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
              onChange={(e)=>setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
              placeholder='search anything'
            />
          </div>
          <button onClick={searchThroughtSearch} className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'>
              <IoIosSearch  className='text-white text-xl'/>
          </button>
        </div>
        <div className='flex items-center'>
          <div className='hidden md:flex'>
            <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className='text-white text-xl items-center'/> 
            </div>
            <div className="flex items-center justify-center ml-2 w-12 h-12 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className='text-white text-xl items-center'/> 
            </div>
            <div className='flex h-10 w-10 overflow-hidden rounded-full md:ml-4'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDFJUZyUVvVl75hIi8DURkS61lr9wXQ8KcQ&s"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
