'use client'
import React from 'react'
import Nav from '@/app/components/nav'
import Aboutus1 from '@/app/components/aboutus1'
import Aboutus2 from '@/app/components/aboutus2'
import Aboutus3 from '@/app/components/aboutus3'
import Aboutus4 from '@/app/components/aboutus4'


const page = () => {
  return (
    <>
        <Nav></Nav>
        <br/><br/><br/><br/>
        <Aboutus1></Aboutus1>
        <br/>
        <Aboutus2></Aboutus2>
        <br/>
        <Aboutus3></Aboutus3>
        <br/>
        <Aboutus4></Aboutus4>
    </>
  )
}

export default page