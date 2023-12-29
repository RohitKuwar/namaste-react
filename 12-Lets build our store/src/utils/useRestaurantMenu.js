import { useState, useEffect } from "react";
import { MENU_URL } from './constants'

function useRestaurantMenu(resId) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])  

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId)
        const res = await data.json()
        console.log('res', res)
        setData(res?.data)
    }
  return data;
}

export default useRestaurantMenu