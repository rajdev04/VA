import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link'

const page7 = () => {
  return (
    <>
        <div className='cont-7'>
            <div className='cont-7-left'>
                <div className='center-7-wraper-left'>
                    <div className='contact-1'>
                        <h1>Contact Info</h1>
                    </div>
                    <div className='contact-2'>
                        <div className='c-details'>
                            <h1>Address :-</h1>
                            <h2>2nd Floor, Block A, Ganpati Apartment, Oderley Bazaar, Varanasi, Uttar Pradesh, Pin- 221002</h2>
                        </div>
                        <div className='c-details'>
                            <h1>Email :-</h1>
                            <h2>vaidikanusthanam@gmail.com</h2>
                        </div>
                        <div className='c-details'>
                            <h1>Phone no. :-</h1>
                            <h2>986XXXXX53</h2>
                        </div>
                    </div>
                    <div className='contact-3'>
                        <div className='social-cont'>
                        <i class="ri-facebook-box-line"></i>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-twitter-line"></i>
                        <i class="ri-pinterest-line"></i>
                    </div>
                    <div className='social-cont'>                    
                        <i class="ri-spotify-line"></i>
                        <i class="ri-youtube-line"></i>
                        <i class="ri-linkedin-box-line"></i>
                        <i class="ri-telegram-line"></i>
                    </div>
                    </div>
                </div>
            </div>
            <div className='cont-7-right'></div>
            <div className='cont-7-center'>
                <div className='inner-7-center'>
                    <div className='contact-inner-left'></div>
                    <div className='contact-inner-right'>
                        <div className='inner-right-7-1'>
                            <h1 className='r-t-1'>Send a Message</h1>
                        </div>
                        <div className='inner-right-7-2'>
                            <div className='faurm'> 
                                <form>
                                    <div className='faurm-1'>
                                        <label>
                                            First Name
                                            <br/>
                                            <input type='text'/>
                                        </label>
                                        <label>
                                            <input type='email' placeholder='Email'/>
                                        </label>
                                       <textarea rows='10' cols='50' placeholder='write you message here...'>

                                       </textarea>
                                    </div>
                                    <div className='faurm-2'>
                                        <label>
                                            Last Name
                                            <br/>
                                            <input type='text' />
                                        </label>
                                        <label>
                                            <input type='text' placeholder='Mobile Number'/>
                                        </label>
                                        <label>
                                            <input style={{display: 'none'}} type='text' placeholder='Mobile Number'/>
                                        </label>
                                    </div>  
                                    <Link href='' className='f-hyperlink'>SEND</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page7