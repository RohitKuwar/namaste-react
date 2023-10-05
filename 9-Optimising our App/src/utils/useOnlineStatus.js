import { useState, useEffect } from 'react'

function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(false)

    useEffect(() => {
    // window.addEventListener('online', () => {
    //     setIsOnline(true)
    //     console.log("I am connected to the internet")
    // })
    // window.addEventListener('offline', () => {
    //     setIsOnline(false)
    //     console.log("Disconnected...so sad!!!")
    // })
    navigator.onLine ? setIsOnline(true) : setIsOnline(false)
    }, [])

    
    console.log('isOnline', isOnline)

  return isOnline;
}

export default useOnlineStatus