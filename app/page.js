import React from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import Nav from '@/app/components/nav'
import Page1 from '@/app/components/page1'
import Page2 from '@/app/components/page2'

const page = () => {
  return (
    <>
      <Nav></Nav>
      <br/><br/><br/><br/><br/>
      <Page1></Page1>
      <br/>
      <Page2></Page2>
    </>
  )
}

export default page