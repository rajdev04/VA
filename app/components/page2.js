import React from 'react'

const page2 = () => {
  return (
    <div className='cont-2'>
        <div className='cont-2-part-1'>
            <h1 className='cont-2-text-1'>Our Services</h1>
        </div>
        <div className='cont-2-part-2'>
            <h1 className='cont-2-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem ut turpis facilisis, at faucibus erat tempor. Nulla in semper leo, elementum pharetra magna. Sed massa dui, consectetur id.</h1>
        </div>
        <br/>
        <div className='vid-wraper'>
            <video  className='vid' controls autoPlay muted loop>
                <source src='./LongVideo.mp4' type="video/mp4"/>
            </video>
        </div>
    </div>
  )
}

export default page2