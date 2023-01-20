import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { allvalues} from '../constants';
import Button from '../components/Button';
import Switch from '../components/Switch';
import Monthlysub from '../components/Monthlysub';
import Yearlysub from '../components/Yearlysub';
import GoBack from '../components/GoBack';



const Selectplans = () => {


  const navigate = useNavigate()
  const [allStateValues, setAllStateValues] = useState(allvalues)
  const [switcher, setSwitcher] = useState(false)


  // Array to save price of the plan
  const [planArr] = useState([])
  planArr.length = 0



  // Switcher Button function
  const handleSwitcher =() => {
    setSwitcher((prev)=> !prev)
  }


  useEffect(() => {
    const myPlan = localStorage.getItem("myPlan") || null
    myPlan && setAllStateValues(JSON.parse(myPlan))
  },[])  
  
  
  // Save the selected element to an Array and Localstorage
  const arraypush = (plan) => {
    const previousData = [...allvalues]
    previousData.map(item => {
      if(plan.id === item.id){
        return item.on = true
      } else {
        return item.on = false
      }
    })
    setAllStateValues(previousData)
        
  }  



  const handleBack = (event) => {
    event.preventDefault()
    navigate('/Personal')
  }
  

  // Submit button
  const  handleSubmit =(event)=> {
    event.preventDefault()
    
    allStateValues.map(item => {
      if(item.on === true){
        const data = allStateValues
        localStorage.setItem("myPlan", JSON.stringify(data))
        return navigate('/Addons')
      } else {
        return ''
      }
    })

  }




  

  return (
    <div className=''>
      <div className='flex sm:bg-transparent absolute left-[7.5%] top-[15%] sm:left-0 sm:top-0 sm:relative bg-White justify-center w-[85%] h-[550px] sm:h-[100%] sm:w-[100%] rounded-xl  p-4  pt-10 sm:pr-0  sm:ml-4 '>
        <form>
          <div>
            <h3 className=' text-Marine font-bold t text-[25px] '>Personal info</h3>
            <p className='text-Coolg text-[13px]'>You have the option of monthly or yearly billing</p>
          </div>

            <div className={`justify-between w-[100%] mt-5 cursor-pointer ${switcher ? "hidden" : "sm:flex flex-col sm:flex-row"}`}>
              {allStateValues.slice(0, 3).map(plan => (
                <Monthlysub 
                  key={plan.id}
                  handleArr={arraypush}
                  plan={plan}
                /> 

                ))
              }     
            </div>
            
            <div className={` justify-between w-[100%] mt-5 cursor-pointer ${switcher ? "sm:flex flex-col sm:flex-row" : "hidden"}`}>
              {allStateValues.slice(3, 6).map(plan => (
                <Yearlysub
                  key={plan.id}
                  handleArr={arraypush}
                  plan={plan}                  
                />                  

                ))
              }     
            </div>


            <div className='flex justify-center items-center content-center mt-5 w-full h-[3rem] bg-Lightg'>
              <Switch 
                switcher={switcher}
                setSwitcher={setSwitcher}
                handleSwitcher={handleSwitcher}
              />
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

export default Selectplans