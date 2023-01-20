import React, { useState, useEffect } from 'react'
import Button from '../components/Button';
import GoBack from '../components/GoBack';
import { useNavigate } from 'react-router-dom';
import { addOnValues } from '../constants/index';
import AddExtral from '../components/AddExtral';


const Addons = () => {

  const [allValues, setAllvalues] = useState(addOnValues)
  const navigate = useNavigate()

  
  
  useEffect(() => {

    const checkValue = localStorage.getItem("checkValue") || null
    checkValue && setAllvalues(JSON.parse(checkValue))
    

  },[])  
  
  
  // Save the selected element to an Array and Localstorage
  const arraypush = (plan) => {
        
    const previousData = [...allValues]
    previousData.map(item => {
      if(plan.id === item.id){
        return item.on = !item.on
      } else {
        return ''
      }
    })
    setAllvalues(previousData)
  }  
  

  // Go back
  const handleBack = (event) => {

    event.preventDefault()
    navigate('/Selectplans')
  }
  

  // Submit button
  const  handleSubmit =(event)=> {

    event.preventDefault()
    
    allValues.map(item => {
      if(item.on === true){
        const data = allValues
        localStorage.setItem("checkValue", JSON.stringify(data))
        return navigate('/Summary')
      } else {
        return ''
      }
    })

  }
  
  return(    
    <div>
      <div className='flex sm:bg-transparent absolute left-[7.5%] top-[15%] sm:left-0 sm:top-0 sm:relative bg-White justify-center w-[85%] h-[550px] sm:h-[100%] sm:w-[100%] rounded-xl  p-4 sm:ml-4 pt-10 sm:pr-0    '>
          <form>
            <div>
              <h3 className=' text-Marine font-bold t text-[25px] '>Pick add-ons</h3>
              <p className='text-Coolg text-[13px]'>Add-ons help enhance your gaming expirince</p>
            </div>

              <div className={`flex flex-col justify-between w-[100%] mt-5 cursor-pointer`}>
                {allValues.map(plan => (
                  <AddExtral 
                    handleArr={arraypush}
                    plan={plan}
                    key={plan.id}
                  />
                ))}
              </div>
              
            <div className='flex w-full justify-between mt-7 '>
                <div onClick={handleBack}>
                  <GoBack type="button" />
                </div>
                <div onClick={handleSubmit}>
                  <Button  type="button"  /> 
                </div>
            </div>

          </form>
        </div>  
    </div>
  )
}

export default Addons