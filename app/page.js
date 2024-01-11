import React from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import Nav from '@/app/components/nav'
import Page1 from '@/app/components/page1'
import Page2 from '@/app/components/page2'
import Page3 from '@/app/components/page3'
import Page4 from '@/app/components/page4'

const page = () => {
  return (
    <>
      <Nav></Nav>
      <br/><br/><br/><br/>
      <Page1></Page1>
      <br/>
      <Page2></Page2>
      <br/>
      <Page3></Page3>
      <br/>
      <Page4></Page4>
    </>
  )
}

export default page