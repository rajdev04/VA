'use client'
import React, { useRef, useState }from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const page6 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
        <div className='cont-6'>
           <div className='slide-wraper'>
           <Slider {...settings}>
            <div>
              <div className='slide-in'>
                <img className='user-img' src='test1.jpg'/>
              </div>
              <div className='user-review'>
                <h1 className='user-given-review'>"I can't express how grateful I am to Vaidik Anushthanam for their exceptional online Pooja service. I reside far from my homeland and was losing the spiritual connection. Their Pooja not only bridged the distance but filled my home with divine energy. The priest's expertise and devotion to the pooja were truly inspiring. My heart brims with gratitude. I will rate it full scale on 5"</h1>
              </div>
              <div className='username'>
                <h1 className='user-name'> Alok Srivastava ( India)</h1>
              </div>
            </div>




            <div>
              <div className='slide-in-1'>
              {/* <h1 className='quotes'>"</h1> */}
                <div className='user-photo'>
                  <img className='user-photu' src='./test1.jpg'/>
                </div>
              </div>
              <div className='slide-in-2'>
               
                <div className='user-gyaan'>
                  <h1 className='user-gyaan-dediya'>"I can't express how grateful I am to Vaidik Anushthanam for their exceptional online Pooja service. I reside far from my homeland and was losing the spiritual connection. Their Pooja not only bridged the distance but filled my home with divine energy. The priest's expertise and devotion to the pooja were truly inspiring. My heart brims with gratitude. I will rate it full scale on 5"</h1>
                </div>
                <h1 className='chodu'> Alok Srivastava ( India)</h1>
              </div>
            </div>
            </Slider>
           </div>
        </div>
    </>
  )
}

export default page6