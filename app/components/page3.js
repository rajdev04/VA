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
                            <h1 className='service-two-text-2'>Poojas that suit your daily needs and sacredly cleanse your daily deeds. These daily poojas are a must essential for individuals and families comprised of all age groups.</h1>
                        </div>
                    </div>
                    <div className='service-2'>
                        <Link href='/regularpooja' className='hype-link-service'>EXPLORE MORE</Link>
                    </div>
                </div>


                <div className='service'>
                    <div className='service-1'>
                    <div className='service-one'>
                            <img src='./yaadein86.jpg' className='service-one-img'/>
                        </div>
                        <div className='service-two'>
                            <h1 className='service-two-text-1'>Life Sanskars</h1> 
                            <h1 className='service-two-text-2'>Sacred milestones for each achievement in a life process. Celebrating these checkpoints denotes mukti and liberation.</h1>
                        </div>
                    </div>
                    <div className='service-2'>
                    <Link href='/lifesanskar' className='hype-link-service'>EXPLORE MORE</Link>
                    </div>
                </div>


                <div className='service'>
                    <div className='service-1'>
                    <div className='service-one'>
                            <img src='./yaadein62.jpg' className='service-one-img'/>
                        </div>
                        <div className='service-two'>
                            <h1 className='service-two-text-1'>Astrology pooja</h1> 
                            <h1 className='service-two-text-2'>Sacred science summoning planets to bestow positivity in life. A pure relation that binds a human body and cosmic forces together. </h1>
                        </div>
                    </div>
                    <div className='service-2'>
                    <Link href='astrologypooja' className='hype-link-service'>EXPLORE MORE</Link>
                    </div>
                </div>


                <div className='service'>
                    <div className='service-1'>
                    <div className='service-one'>
                            <img src='./yaadein110.jpg' className='service-one-img'/>
                        </div>
                        <div className='service-two'>
                            <h1 className='service-two-text-1'>Festive pooja</h1> 
                            <h1 className='service-two-text-2'>Illuminating your inner divine through vaidik and sanatani festivals. Celebrating all these brings prosperity, and denotes your spiritual fulfillness.</h1>
                        </div>
                    </div>
                    <div className='service-2'>
                    <Link href='' className='hype-link-service'>EXPLORE MORE</Link>
                    </div>
                </div>
        </div>
    </>
  )
}

export default page3