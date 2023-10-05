import React from 'react'
import Header from './Header'
import useOnlineStatus from '../utils/useOnlineStatus';

function Contact() {
  const status = useOnlineStatus()

  console.log('status', status)

  return (
    <div>
        <Header />
        <h1>Contact</h1>
        <h2>{status.toString()}</h2>
    </div>
  )
}

export default Contact