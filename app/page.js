import React from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import Nav from '@/app/components/nav'
import Page1 from '@/app/components/page1'
import Page2 from '@/app/components/page2'
import Page3 from '@/app/components/page3'
import Page4 from '@/app/components/page4'
import Page5 from '@/app/components/page5'
import Page6 from '@/app/components/page6'
import Page7 from '@/app/components/page7'

const page = () => {
  return (
    <>
      <div className='nav-wraper'>
      <Nav></Nav>
      </div>
      <Page1></Page1>
      <br/>
      <Page2></Page2>
      <br/>
      <Page3></Page3>
      <br/>
      <Page4></Page4>
      <br/>
      <Page5></Page5>
      <br/>
      <Page6></Page6>
      <br/>
      <Page7></Page7>
    </>
  )
}

export default page