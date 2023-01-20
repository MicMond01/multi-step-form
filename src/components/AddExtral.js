import { Checkbox } from 'flowbite-react';
import React from 'react'

const AddExtral = ({handleArr, plan}) => {
  return (
    <div>
        <label htmlFor={plan.id}  className={`sm:flex w-full h-[60px] mb-4  rounded-[10px] p-4 boxShadow hidden ${plan.on ? "bg-Magnolia border-2 border-Purplish " : "transparent" }`}     >
            <div className={`flex items-center w-full`}  >
              <div className='flex justify-center items-center'>
                <input id={plan.id} name={Checkbox} type="checkbox" checked={plan.on} onChange={()=> {handleArr(plan)}} className='text-Marine bg-gray-100 rounded focus:ring-0  dark:bg-gray-700 dark:border-Coolg cursor-pointer' />
              </div>
              <div className='mt-0 pl-5'>
                <h4 className='text-[14px] mb-1.5 font-medium'>{plan.name}</h4>
                <p className='text-Coolg text-[13px]'>{plan.discription}</p>
              </div>
            </div>
              <div>
                <p className='text-Purplish text-[13px]'>{plan.price}</p>
              </div>
        </label>

        {/* Mobile */}
        <div className={`flex items-center  w-[100%] h-[100%] mb-4  rounded-[10px] p-4 boxShadow sm:hidden  ${plan.on ? "bg-Magnolia border-2 border-Purplish " : "transparent" }`}    >
            <div className={`flex items-center w-full`}  >
              <div className='flex justify-center items-center'>
                <input type="checkbox" onClick={()=> {handleArr(plan)}} className='text-Marine bg-gray-100 rounded focus:ring-0  dark:bg-gray-700 dark:border-Coolg cursor-pointer' />
              </div>
              <div className='mt-0 pl-5'>
                <h4 className='text-[14px] mb-1.5 font-medium'>{plan.name}</h4>
                <p className='text-Coolg text-[13px]'>{plan.discription}</p>
              </div>
            </div>
              <div>
                <p className='text-Purplish text-[13px]'>{plan.price}</p>
              </div>
        </div>
    </div>
  )
}

export default AddExtral