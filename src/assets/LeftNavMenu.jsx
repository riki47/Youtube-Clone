import React from 'react'

const LeftNavMenu = ({text, icon, className, action}) => {
  return (
    <div onClick = {action} className={"text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] "+className}>
      <span className='text-xl mr-5 mt-2'>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenu
