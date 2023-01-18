import React from 'react'

const Switch = ({setSwitcher, switcher, handleSwitcher}) => {



  return (
    <div className='relative inline-flex'>
        <label className=" inline-flex items-center cursor-pointer">
            <span className={`mr-3 text-sm font-bold  dark:text-gray-300  ${switcher ? "text-Coolg" : "text-Marine"}`}>Monthly</span>
            <input type="checkbox" value="" className="sr-only peer " onChange={handleSwitcher} />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[69px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-Marine"></div>
            <span className={`ml-3 text-sm font-bold  dark:text-gray-300 ${switcher ? "text-Marine" : "text-Coolg"} `}>Yearly</span>
        </label>
    </div>
  )
}

export default Switch