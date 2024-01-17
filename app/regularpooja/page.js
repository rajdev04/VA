import React from 'react'
import Nav from '@/app/components/nav'

const page = () => {
  return (
    <>

        <div className='nav-wraper'>
          <Nav></Nav>
        </div>

        <div className='pooja-cont'>


            <div className='service-cont'>
                <div className='service-img-cont'>
                    <img className='service-img' src=''/>    
                </div>
                <div className='service-text-cont'>
                    <div className='main-header'>
                        <h1>Rudrabhishek</h1>
                    </div>
                    <div className='sub-heading'>
                        <h1>Unveiling Divine Blessings</h1>
                        <h2>The sacred Rudrabhishek is profoundly mentioned in the ancient Vedic text, the Rudram Chamakam, a part of the Yajur Veda. It reveres Lord Rudra, a fierce yet benevolent aspect of Lord Shiva.</h2>
                    </div>
                    <div className='service-context'>
                        <h1>Importance</h1>
                        <h2>Rudrabhishek is a spiritual practice that holds immense significance in Hinduism. It is a way of seeking divine blessings, purification, and liberation. This powerful ritual is believed to cleanse one's soul, remove negative energy, and invoke divine grace.</h2>
                    </div>
                    <div className='service-context'>
                        <h1>Who Should Do It </h1>
                        <h2>This ritual is open to all individuals seeking spiritual enlightenment, solace, or healing, and those who wish to strengthen their connection with Lord Shiva.</h2>
                    </div>
                </div>
            </div>


        </div>
    </>
  )
}

export default page