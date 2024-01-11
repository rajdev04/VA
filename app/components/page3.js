import React from 'react'
import Link from 'next/link'

const page3 = () => {
  return (
    <>
        <div className='cont-3'>

                
                <div className='service'>
                    <div className='service-1'>
                        <div className='service-one'>
                            <img src='./yaadein79.jpg' className='service-one-img'/>
                        </div>
                        <div className='service-two'>
                            <h1 className='service-two-text-1'>Regular pooja</h1> 
                            <h1 className='service-two-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem ut turpis facilisis, at faucibus erat tempor.</h1>
                        </div>
                    </div>
                    <div className='service-2'>
                        <Link href=''>EXPLORE MORE</Link>
                    </div>
                </div>


                <div className='service'>
                    <div className='service-1'>
                    <div className='service-one'>
                            <img src='./yaadein86.jpg' className='service-one-img'/>
                        </div>
                        <div className='service-two'>
                            <h1 className='service-two-text-1'>Life Sanskars</h1> 
                            <h1 className='service-two-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem ut turpis facilisis, at faucibus erat tempor.</h1>
                        </div>
                    </div>
                    <div className='service-2'>
                    <Link href=''>EXPLORE MORE</Link>
                    </div>
                </div>


                <div className='service'>
                    <div className='service-1'>
                    <div className='service-one'>
                            <img src='./yaadein62.jpg' className='service-one-img'/>
                        </div>
                        <div className='service-two'>
                            <h1 className='service-two-text-1'>Astrology pooja</h1> 
                            <h1 className='service-two-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem ut turpis facilisis, at faucibus erat tempor.</h1>
                        </div>
                    </div>
                    <div className='service-2'>
                    <Link href=''>EXPLORE MORE</Link>
                    </div>
                </div>


                <div className='service'>
                    <div className='service-1'>
                    <div className='service-one'>
                            <img src='./yaadein110.jpg' className='service-one-img'/>
                        </div>
                        <div className='service-two'>
                            <h1 className='service-two-text-1'>Festive pooja</h1> 
                            <h1 className='service-two-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem ut turpis facilisis, at faucibus erat tempor.</h1>
                        </div>
                    </div>
                    <div className='service-2'>
                    <Link href=''>EXPLORE MORE</Link>
                    </div>
                </div>
        </div>
    </>
  )
}

export default page3