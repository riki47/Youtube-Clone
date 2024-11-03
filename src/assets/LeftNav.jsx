import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftNavMenu from './LeftNavMenu'
import {Categories} from '../../utils/Constants.jsx'
import { Context } from '../context/ContextApi.jsx'

const LeftNav = () => {
  const {selectCatagories, setSelectCatagories ,mobileMenu} = useContext(Context);
  const navigate = useNavigate();

  function clickHandler(name,type)
  {
    switch(type){
      case "category":
        return setSelectCatagories(name)

      case "home":
        return setSelectCatagories(name)
      
      case "menu":
        return false;
      
      default:
        break;
    }
  }
  
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-[#020014] absolute md:relative z-10 translate-x-[-240px] md:translate-x-[0] transition-all duration-500 ${!mobileMenu ? "":"translate-x-[0vh]"}`}>
      <div className='flex px-5 flex-col'>
        {Categories.map((item)=>{
          return(
            <div >
              <React.Fragment key = {item.name}>
                <LeftNavMenu
                  text = {item.type === "home" ? "Home":item.name}
                  icon = {item.icon}
                  action = {
                    ()=>
                      {
                      clickHandler(item.name,item.type);
                      navigate("/");
                      }}
                  className = {`${
                    selectCatagories == item.name 
                    ? "bg-white/[0.15]"
                    : ""
                  }`}
                />
                {item.divider && (
                  <hr className='my-5 border-white/[0.2]'/> 
                )}
              </React.Fragment>
            </div>
          );
        })}
        <span className='text-xs text-white/[0.5]'>This section is nonfunctional currently</span>
        <hr className='my-5 border-white/[0.2]'/>
        <div className='text-white/[0.5] text-[12px]'>
          clone by Rithwik Koul
        </div>
      </div>
    </div>
  )
}

export default LeftNav
