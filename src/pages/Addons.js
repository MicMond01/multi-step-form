import React, { useState } from 'react'
import Button from '../components/Button';
import GoBack from '../components/GoBack';
import { useNavigate } from 'react-router-dom';
import { addOnValues } from '../constants/index';
import AddExtral from '../components/AddExtral';


const Addons = () => {

  const [allValues, setAllvalues] = useState(addOnValues)
  const [arr] = useState([])
  const navigate = useNavigate()

  // arr.length = 2



  const toggleCheckbox = (id) => {
    console.log(id);


    setAllvalues(items => {
      return items.map(newItems => {
        if(newItems.id === id){
          return {...newItems, on: !newItems.on , arr: arr.push(!newItems.on, newItems.figure) }
        } else {
          return newItems
        }
      })
    })
  }
  
  console.log(arr);
  // if(newItems.on === true){
  //   return {...newItems, ne: console.log(newItems.on, newItems.figure)}
  // } 

  // Save the selected element to an Array and Localstorage
  const arraypush = (figure) => {

    // console.log(allValues);
    // arr.push(figure)

    localStorage.setItem('selectedValue', JSON.stringify(arr))
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
        return navigate('/Summary')
      } else {
        return ''
      }
    })

  }
  
  return(    
    <div>
      <div className='sm:flex hidden justify-center w-[130%]  pl-10 pt-10'>
          <form>
            <div>
              <h3 className=' text-Marine font-bold t text-[25px] '>Pick add-ons</h3>
              <p className='text-Coolg text-[13px]'>Add-ons help enhance your gaming expirince</p>
            </div>

              <div className={`flex flex-col justify-between w-[100%] mt-5 cursor-pointer`}>
                {allValues.map(plan => (
                  <AddExtral 
                    handlChange={toggleCheckbox}
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
      
      {/* Mobile */}
      <div className='flex justify-center w-[70%] h-[550px] absolute top-[15%] left-[15%] bg-Alabaster rounded-[10px] boxShadow  pt-7 p-3 sm:hidden '>
          <form>
            <div>
              <h3 className=' text-Marine font-bold t text-[25px] '>Pick add-ons</h3>
              <p className='text-Coolg text-[13px]'>Add-ons help enhance your gaming expirince</p>
            </div>

              <div className={`flex flex-col justify-between w-[100%] mt-5 cursor-pointer`}>
                {allValues.map(plan => (
                  <AddExtral 
                    handlChange={toggleCheckbox}
                    handleArr={arraypush}
                    key={plan.id}
                    plan={plan}
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