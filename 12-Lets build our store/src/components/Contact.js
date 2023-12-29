import React from 'react'
import useOnlineStatus from '../utils/useOnlineStatus';

function Contact() {
  const status = useOnlineStatus()

  console.log('status', status)

  return (
    <div>
        <h1>Contact</h1>
        <h2>{status.toString()}</h2>
    </div>
  )
}

export default Contact