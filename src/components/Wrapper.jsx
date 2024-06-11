import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

function Wrapper(props) {
  return (
    <>
        <div className='flex'>
            <SideBar />
            <div className='h-screen w-full bg-black'>
                <Navbar />
                {props.children}
            </div>
        </div>
    </>
  )
}

export default Wrapper