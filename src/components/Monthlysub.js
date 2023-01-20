import React from 'react'
// import { MonthlyPlan } from '../constants';



const Monthlysub = ({plan, handlChange, handleArr}) => {




  return (
    <div>
      <div className={`sm:flex  w-[125px] h-[160px]  rounded-[10px] p-4 boxShadow hidden ${plan.on ? "bg-Magnolia border-2 border-Purplish " : "transparent" }`}  onClick={()=> {handlChange(plan.id); handleArr(plan.figure, plan.name, plan.price, plan.duration)}} >
        <div className={`flex flex-col justify-between `}  >
          <div>
            <img src={plan.icon} alt="icon" />
          </div>
          <div className='m-0'>
            <h4 className='text-[14px] mb-1.5 font-medium'>{plan.name}</h4>
            <p className='text-Coolg text-[13px]'>{plan.price}</p>
          </div>
        </div>

      </div>
      
      {/* Mobile View */}
      <div className={`flex  w-[100%] h-[80px] mb-2  rounded-[10px] p-4 boxShadow sm:hidden ${plan.on ? "bg-Magnolia border-2 border-Purplish " : "transparent" }`}  onClick={()=> {handlChange(plan.id); handleArr(plan.figure, plan.name, plan.price, plan.duration)}} >
        <div className={`flex justify-between `}  >
          <div className='flex justify-center items-center'>
            <img src={plan.icon} alt="icon" />
          </div>
          <div className='ml-3'>
            <h4 className='text-[14px] mb-1.5 font-medium'>{plan.name}</h4>
            <p className='text-Coolg text-[13px]'>{plan.price}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Monthlysub