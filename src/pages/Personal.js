import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';




const Personal = () => {

  const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: ""
  })


  // var error = ""
  

  const handleChange = (event) => {

    setInput(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  console.log(input);



  useEffect(() => {

    const remInput = localStorage.getItem("newinput") || null
    remInput && setInput(JSON.parse(remInput))
    

  },[])

  


  const handleSubmit =(event) => {

    event.preventDefault()

    
    const newinput = input
    

    if(input.name.length > 0 && input.email.length > 0  && input.phone.length > 0 ) {
      
      localStorage.setItem('newinput', JSON.stringify(newinput))
      return navigate('/Selectplans')
    }


  }







  return (
    <div>
      
      <div className='flex sm:bg-transparent absolute left-[7.5%] top-[15%] sm:left-0 sm:top-0 sm:relative bg-White justify-center w-[85%] h-[550px] sm:h-[100%] sm:w-[100%] rounded-xl  p-4  pt-10 sm:pr-0  sm:ml-4'>
        <form  onSubmit={handleSubmit}>
          <div>
            <h3 className=' text-Marine font-bold t text-[25px] '>Personal info</h3>
            <p className='text-Coolg text-[13px]'>Please provide your name, email address, and phone number</p>
          </div>
          <div>

            <div className='flex flex-col mt-4'>
              <div className='w-full flex justify-between '>
                <label className='text-[12px] mb-1.5 font-medium' htmlFor="name">Name</label>
                <p className='text-[12px] mb-1.5 font-medium text-Strawberry'>{input.name === "" ? "Enter a valied Name" : ""}</p>
              </div>
              <input className='h-[40px] w-[100%] bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="text" id='name' placeholder='e.g Captain Nigeria' value={input?.name}  onChange={handleChange} name="name" />
            </div>

            <div className='flex flex-col mt-4'>
              <div className='w-full flex justify-between '>
                <label className='text-[12px] mb-1.5 font-medium' htmlFor="email">Email Address</label>
                <p className='text-[12px] mb-1.5 font-medium text-Strawberry'>{input.email === "" ? "Enter a valied Email" : ""}</p>
              </div>
              <input className='h-[40px] w-[100%] bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="email" placeholder='e.g captainNigeria@lorem.com' id='email' value={input?.email} onChange={handleChange} name="email"  />
            </div>

            <div className='flex flex-col mt-4'>
              <div className='w-full flex justify-between '>
                <label className={`text-[12px] mb-1.5 font-medium' htmlFor="phone"`}  >Phone</label>
                <p className='text-[12px] mb-1.5 font-medium text-Strawberry'>{input.phone === "" ? "Enter a valied Phone Number" : ""} </p>
              </div>
              <input className='h-[40px] w-[100%] bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="tel" id='phone' placeholder='e.g +1234567890' value={input?.phone} onChange={handleChange} name="phone"/>
            </div>

          </div>

          <div className='flex w-full justify-end mt-10 '>
            <Button type="button"  /> 
          </div>

        </form>
      </div>
    </div>
  )
}

export default Personal