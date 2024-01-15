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
                <h1 className='user-given-review'>"It was 5 out of 5 stars. The pilgrimage tour organized by Vaidik Anushthanam was an inner transformative experience for me. Apart from just a trip, it was a spiritual awakening for me. Their meticulously planned itinerary adhered by experienced guides along with the aura of sacred sites left an indelible mark on my soul. I returned with a heart full of devotion and gratitude. Thanks to Vaidik Anushthanam"</h1>
              </div>
              <div className='username'>
                <h1 className='user-name'> Alok Srivastava ( India)</h1>
              </div>
            </div>


            <div>
              <div className='slide-in'>
                <img className='user-img' src='test6.jpg'/>
              </div>
              <div className='user-review'>
                <h1 className='user-given-review'>"I can't express how grateful I am to Vaidik Anushthanam for their exceptional online Pooja service. I reside far from my homeland and was losing the spiritual connection. Their Pooja not only bridged the distance but filled my home with divine energy. The priest's expertise and devotion to the pooja were truly inspiring. My heart brims with gratitude. I will rate it full scale on 5".</h1>
              </div>
              <div className='username'>
                <h1 className='user-name'>Guru Shetty</h1>
              </div>
            </div>




            <div>
              <div className='slide-in'>
                <img className='user-img' style={{position: 'absolute', top: '-10%', height: '35vh'}} src='test4.jpg'/>
              </div>
              <div className='user-review'>
                <h1 className='user-given-review'>"My astrology consultation with Vaidik Anushthanam was enlightening. The experienced astrologer's insights were profound, and his guidance was incredibly accurate. I gained valuable perspective on my life's journey, and their compassionate approach made the experience comforting and reassuring. 4 out of 5, and Highly recommended!"</h1>
              </div>
              <div className='username'>
                <h1 className='user-name'>Dolan Jha</h1>
              </div>
            </div>




            <div>
              <div className='slide-in'>
                <img className='user-img' style={{position: 'absolute', top: '-10%'}} src='test2.jpg'/>
              </div>
              <div className='user-review'>
                <h1 className='user-given-review'>"Vaidik Anushthanam made our son's birth Sanskar ceremony truly special. The rituals were properly conducted with utmost authenticity and reverence. The priest's blessings filled our home with positivity, and the entire experience was deeply moving. With 4.5 out of 5, our family is immensely thankful."</h1>
              </div>
              <div className='username'>
                <h1 className='user-name'>Raghavendra Pratap Singh</h1>
              </div>
            </div>




            <div>
              <div className='slide-in'>
                <img className='user-img' src='test5.jpg'/>
              </div>
              <div className='user-review'>
                <h1 className='user-given-review'>"My numerology reading from Vaidik Anushthanam was eye-opening. The numerologist's insights into my life path and destiny were spot on. I gained clarity on many aspects of my life, and this guidance has been invaluable. It's a service that I'll cherish for a lifetime. They are 5 out of 5"- </h1>
              </div>
              <div className='username'>
                <h1 className='user-name'>Supriya Rai</h1>
              </div>
            </div>




            </Slider>
           </div>
        </div>
    </>
  )
}

export default page6