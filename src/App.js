import React from 'react'
import { Personal, Addons,  Selectplans, Summary } from './components';
import Nav from './components/Nav';

import { BrowserRouter ,Routes, Route, Navigate } from 'react-router-dom';


const App = () =>  (


  <div className='bg-Magnolia h-screen w-screen flex justify-center items-center '>

    <div className='sm:flex h-3/4 w-[750px] rounded-[10px] boxShadow bg-Alabaster p-4 hidden'>
      
      <BrowserRouter>
        
        <Nav />

        <Routes >
          
          <Route exact path='/Addons' element={< Addons />}  />
          
          <Route exact path='/Personal' element={< Personal />}  />
          
          <Route exact path='/' element={<Navigate to="Personal"  />}  />
          
          <Route exact path='/Selectplans' element={< Selectplans />}  />
          
          <Route exact path='/Summary' element={< Summary />}  />
          
          {/* <Route exact path='/Thanks' element={< Thanks />}  /> */}

        </Routes>

      </BrowserRouter>

    
    </div>

    {/* Mobile viwe */}

    <div className='flex flex-col    h-screen w-screen p-0 sm:hidden'>
      
      <BrowserRouter>
        
        <Nav />

        <Routes >
          
          <Route exact path='/Addons' element={< Addons />}  />
          
          <Route exact path='/Personal' element={< Personal />}  />
          
          <Route exact path='/' element={<Navigate to="Personal"  />}  />
          
          <Route exact path='/Selectplans' element={< Selectplans />}  />
          
          <Route exact path='/Summary' element={< Summary />}  />
          
          {/* <Route exact path='/Thanks' element={< Thanks />}  /> */}

        </Routes>

      </BrowserRouter>

    
    </div>

  </div>
)

export default App