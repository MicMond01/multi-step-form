import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { allvalues} from '../constants';
import Button from './Button';
import Switch from './Switch';
import Monthlysub from './Monthlysub';
import Yearlysub from './Yearlysub';
import GoBack from './GoBack';






const Selectplans = () => {


  const navigate = useNavigate()
  const [allValues, setAllValues] = useState(allvalues)
  const [switcher, setSwitcher] = useState(false)


  // Array to save price of the plan
  const [arr] = useState([])
  arr.length = 0



  // Switcher Button function
  const handleSwitcher =() => {
    setSwitcher((prev)=> !prev)
  }


  
  // Monthly plan
  const toggleMonthly = (id) => {
    
    console.log(id);

    setAllValues(items => {
      return items.map(planItem => {
        if(planItem.id === id){
          return {...planItem, on: !planItem.on }
        } else if(planItem.on === true) {
          return {...planItem, on: false } 
        } else {
          return planItem
        }
        
      })
    })

  }


  // Save the selected element to an Array and Localstorage
  const arraypush = (figure) => {
    arr.push(figure)

    localStorage.setItem('selectedValue', JSON.stringify(arr))
  }  


  const handleBack = (event) => {

    event.preventDefault()
    navigate('/Personal')
  }
  

  // Submit button
  const  handleSubmit =(event)=> {

    event.preventDefault()
    
    allValues.map(item => {
      if(item.on === true){
        return navigate('/Addons')
      } else {
        return ''
      }
    })

  }




  

  return (
    <div className=''>
    <div className='sm:flex justify-center w-full pl-10 pt-10 hidden'>
        <form>
          <div>
            <h3 className=' text-Marine font-bold t text-[25px] '>Personal info</h3>
            <p className='text-Coolg text-[13px]'>You have the option of monthly or yearly billing</p>
          </div>

            <div className={`flex jus justify-between w-[400px] mt-5 cursor-pointer ${switcher ? "hidden" : "flex"}`}>
              {allValues.slice(0, 3).map(plan => (
                <Monthlysub 
                  key={plan.id}
                  handlChange={toggleMonthly}
                  handleArr={arraypush}
                  plan={plan}
                  // setAllValues={setAllValues}
                /> 

                ))
              }     
            </div>
            
            <div className={`jus justify-between w-[400px] mt-5 cursor-pointer ${switcher ? "flex" : "hidden"}`}>
              {allValues.slice(3, 6).map(plan => (
                <Yearlysub
                  key={plan.id}
                  handlChange={toggleMonthly}
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


      {/* Mobile View */}
    
    <div className='flex justify-center w-[70%] h-[550px] absolute top-[15%] left-[15%] bg-Alabaster p-5 rounded-[10px] boxShadow  pt-7 sm:hidden'>
        <div >
          <div>
            <h3 className=' text-Marine font-bold text-[25px] '>Personal info</h3>
            <p className='text-Coolg text-[13px]'>You have the option of monthly or yearly billing</p>
          </div>

            <div className={`flex flex-col justify-between w-[100%] mt-5 cursor-pointer ${switcher ? "hidden" : "flex"}`}>
              {allValues.slice(0, 3).map(plan => (
                <Monthlysub 
                  key={plan.id}
                  handlChange={toggleMonthly}
                  handleArr={arraypush}
                  plan={plan}
                  // setAllValues={setAllValues}
                /> 

                ))
              }     
            </div>
            
            <div className={`jus justify-between w-[100%] mt-5 cursor-pointer ${switcher ? "flex-col" : "hidden"}`}>
              {allValues.slice(3, 6).map(plan => (
                <Yearlysub
                  key={plan.id}
                  handlChange={toggleMonthly}
                  handleArr={arraypush}
                  plan={plan}
                  // setAllValues={setAllValues}
                  
                />                  

                ))
              }     
            </div>


            <div className='flex justify-center items-center content-center mt-1 w-full h-[3rem] bg-Lightg'>
              <Switch 
                switcher={switcher}
                setSwitcher={setSwitcher}
                handleSwitcher={handleSwitcher}
              />
            </div>

          <div className='flex w-full justify-between mt-5 '>
              <div onClick={handleBack}>
                <GoBack type="button" />
              </div>
              <div onClick={handleSubmit}>
                <Button  type="button"  /> 
              </div>
          </div>

        </div>
      </div>
    
    </div>
  )
}

export default Selectplans