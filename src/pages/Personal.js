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



  useEffect(() => {

    var newinput = {
      name: input.name,
      email: input.email,
      phone: input.phone
    }

    localStorage.setItem('newinput', JSON.stringify(newinput))
  },[input])

  


  const handleSubmit =(event) => {

    event.preventDefault()

    if(input.name.length > 0 && input.email.length > 0  && input.phone.length > 0 ) {
      return navigate('/Selectplans')
    }


  }







  return (
    <div>
      
      <div className='sm:flex justify-center w-full pl-10 pt-10 hidden'>
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
              <input className='h-[40px] w-[370px] bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="text" id='name' placeholder='e.g Captain Nigeria' value={input.name} onChange={handleChange} name="name" />
            </div>

            <div className='flex flex-col mt-4'>
              <div className='w-full flex justify-between '>
                <label className='text-[12px] mb-1.5 font-medium' htmlFor="email">Email Address</label>
                <p className='text-[12px] mb-1.5 font-medium text-Strawberry'>{input.email === "" ? "Enter a valied Email" : ""}</p>
              </div>
              <input className='h-[40px] w-[370px] bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="email" placeholder='e.g captainNigeria@lorem.com' id='email' value={input.email} onChange={handleChange} name="email"  />
            </div>

            <div className='flex flex-col mt-4'>
              <div className='w-full flex justify-between '>
                <label className={`text-[12px] mb-1.5 font-medium' htmlFor="phone"`}  >Phone</label>
                <p className='text-[12px] mb-1.5 font-medium text-Strawberry'>{input.phone === "" ? "Enter a valied Phone Number" : ""} </p>
              </div>
              <input className='h-[40px] w-[370px] bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="tel" id='phone' placeholder='e.g +1234567890' value={input.phone} onChange={handleChange} name="phone"/>
            </div>

          </div>

          <div className='flex w-full justify-end mt-10 '>
            <Button type="button"  /> 
          </div>

        </form>
      </div>

      {/* Mobile view */}

      <div className='flex justify-center w-[70%] h-[550px] absolute top-[15%] left-[15%] bg-Alabaster p-5 rounded-[10px] boxShadow  pt-7 sm:hidden'>
        <form  onSubmit={handleSubmit}>
          <div>
            <h3 className=' text-Marine font-bold text-[25px]  '>Personal info</h3>
            <p className='text-Coolg  '>Please provide your name, email address, and phone number</p>
          </div>
          <div>

            <div className='flex flex-col mt-7'>
              <div className='w-full flex justify-between '>
                <label className='text-[12px] mb-1.5 font-medium' htmlFor="name">Name</label>
                <p className='text-[12px] mb-1.5 font-medium text-Strawberry'>{input.name === "" ? "Enter a valied Name" : ""}</p>
              </div>
              <input className='h-[40px]  bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="text" id='name' placeholder='e.g Captain Nigeria' value={input.name} onChange={handleChange} name="name" />
            </div>

            <div className='flex flex-col mt-4'>
              <div className='w-full flex justify-between '>
                <label className='text-[12px] mb-1.5 font-medium' htmlFor="email">Email Address</label>
                <p className='text-[12px] mb-1.5 font-medium text-Strawberry'>{input.email === "" ? "Enter a valied Email" : ""}</p>
              </div>
              <input className='h-[40px]  bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="email" placeholder='e.g captainNigeria@lorem.com' id='email' value={input.email} onChange={handleChange} name="email"  />
            </div>

            <div className='flex flex-col mt-4'>
              <div className='w-full flex justify-between '>
                <label className={`text-[12px] mb-1.5 font-medium' htmlFor="phone"`}  >Phone</label>
                <p className='text-[12px] mb-1.5 font-medium text-Strawberry'>{input.phone === "" ? "Enter a valied Number" : ""} </p>
              </div>
              <input className='h-[40px]  bg-white border-[1.5px] pl-3 rounded-[7px] placeholder:text-sm focus:outline-none focus:border-Marine' type="tel" id='phone' placeholder='e.g +1234567890' value={input.phone} onChange={handleChange} name="phone"/>
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