'use client'
import React from 'react'
import '@/app/components/nav'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'

const nav = () => {
  return (
    <>
        <div className='navbar'>
            <div className='navleft'>
                <img src='./VR2.png' className='logo'/>
                <h1 className='nav-text'>Vaidik Anusthanam</h1>
            </div>
            <div className='navright'>

                <div className='nav-icon-wrap'>  
                    <div className='gg'> <i class="ri-home-smile-line"></i></div>
                    <div className='gg'><Link className='hyperlink' href='/'>Home</Link></div>
                </div>

                <div className='nav-icon-wrap'>
                    <div className='gg'><i class="ri-ancient-pavilion-line"></i></div>
                    <div className='gg'><Link className='hyperlink' href='/about-us'>About us</Link></div>
                </div>

                <div className='nav-icon-wrap'>
                    <div className='gg'><i class="ri-gallery-line"></i></div>
                    <div className='gg'><Link className='hyperlink' href=''>Gallery</Link></div>
                </div>

                <div className='nav-icon-wrap'>
                    <div className='gg'><i class="ri-service-line"></i></div>
                    <div className='gg'><Link className='hyperlink' href=''>Our Services</Link></div>
                </div>

                <div className='nav-icon-wrap'>
                    <div className='gg'><i class="ri-contacts-line"></i></div>
                    <div className='gg'><Link className='hyperlink' href=''>Contact us</Link></div>
                </div>    

            </div>
        </div>
    </>
  )
}

export default nav