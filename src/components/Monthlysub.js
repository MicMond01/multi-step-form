import React from 'react'
// import { MonthlyPlan } from '../constants';



const Monthlysub = ({plan, handlChange, handleArr}) => {




  return (
    <div>
      <div className={`flex w-full  sm:w-[125px] h-full sm:h-[160px] mb-2 rounded-[10px] p-4 boxShadow ${plan.on ? "bg-Magnolia border-2 border-Purplish " : "transparent" }`}  onClick={()=> {handleArr(plan)}} >
        <div className={`flex flex-row sm:flex-col justify-between `}  >
          <div className='mr-4 sm:mr-0'>
            <img src={plan.icon} alt="icon" />
          </div>
          <div className='m-0'>
            <h4 className='text-[14px] mb-1.5 font-medium'>{plan.name}</h4>
            <p className='text-Coolg text-[13px]'>{plan.price}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Monthlysub