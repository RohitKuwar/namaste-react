import React, { useEffect } from 'react'
import Header from './Header'

function Contact() {

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log('setInterval contact')
    // }, 1000)
    // return () => clearInterval(timer)
  }, [])

  return (
    <div>
        <Header />
        <h1>Contact</h1>
    </div>
  )
}

export default Contact