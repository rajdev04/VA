import React from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import Nav from '@/app/components/nav'
import Page1 from '@/app/components/page1'

const page = () => {
  return (
    <>
      <Nav></Nav>
      <br/><br/><br/><br/><br/>
      <Page1></Page1>
    </>
  )
}

export default page