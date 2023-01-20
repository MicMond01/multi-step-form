import React from 'react'
import GoBack from './../components/GoBack';
import { useNavigate } from 'react-router-dom';
import ConfirmBtn from './../components/ConfirmBtn';
import { useEffect, useState } from 'react';



const Summary = () => {

  const navigate = useNavigate()
  const [planValue, setPlanValue] = useState({});
  const [check, setCheck] = useState([])

  const getSelectedValues = () => {
    const myPlan = localStorage.getItem("myPlan")
    const myPlanObj = JSON.parse(myPlan).filter(item => item.on)

    setPlanValue(myPlanObj[0])
    
    const checkValue = localStorage.getItem("checkValue")
    const checkValueObj = JSON.parse(checkValue).filter(item => item.on)
    setCheck(checkValueObj)

    
  }

  const totalPrice = () => {
    let price = 0
    check.map(item => {
      price = price + item.figure
    })

    return price + planValue.figure
  }

  
  useEffect(() => {
    getSelectedValues()
  },[])
  

  
  // Go back
  const handleBack = (event) => {

    event.preventDefault()
    navigate('/Addons')
  }
  

  // Submit button
  const  handleSubmit =(event)=> {

    event.preventDefault()
    navigate('/Thanks')
  }


  return (
    <div>
      <div className='flex sm:bg-transparent absolute left-[7.5%] top-[15%] sm:left-0 sm:top-0 sm:relative bg-White justify-center w-[85%] h-[550px] sm:h-[100%] sm:w-[130%] rounded-xl  p-4  pt-10 sm:pr-0  '>
          <form>
            <div>
              <h3 className=' text-Marine font-bold t text-[25px] '>Finishing up</h3>
              <p className='text-Coolg text-[13px]'>Double-check everything looks OK before confirming.</p>
            </div>

              <div className={`flex flex-col justify-between w-[100%] mt-5 cursor-pointer`}>
                <div className='bg-Magnolia p-4 rounded-lg m-3'>
                  <div className='flex justify-between border-b-2 pb-5 border-Lightg'>
                    <div>
                      <h4 className='b font-bold text-Marine'>{planValue?.name} ({planValue?.duration})</h4>
                      <p className='text-Coolg cursor-pointer underline'>Change</p>
                    </div>
                    <div>
                      <h4 className='b font-bold text-Marine'>{planValue?.price}</h4>
                    </div>
                  </div>
                  <div className='mt-3'> 
                  {
                    check.map(item => (
                      <div className='flex justify-between' key={item.id}>
                        <p className='text-Coolg cursor-pointer'>{item?.name}</p>
                        <h4 className='font-semibold text-Marine'>{item?.price}</h4>
                    </div>
                    ))
                  }
                  </div>
                </div>
                <div className='flex justify-between mt-6'>
                  <p className='text-Coolg '>Total</p>
                  <h4 className='b font-bold text-Purplish'>${totalPrice()}/yr</h4>
                </div>
              </div>
              
            <div className='flex w-full justify-between mt-7 '>
                <div onClick={handleBack}>
                  <GoBack type="button" />
                </div>
                <div onClick={handleSubmit}>
                  <ConfirmBtn  type="button"  /> 
                </div>
            </div>

          </form>
        </div>  
    </div>
  )
}

export default Summary