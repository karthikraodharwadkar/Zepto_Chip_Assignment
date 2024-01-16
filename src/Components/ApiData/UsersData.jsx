import React, { useEffect, useState } from 'react'
import axios from "axios"
import ChipElement from '../ChipElement/ChipElement'

export default function UsersData() {

    const [usersData,setUsersData] = useState([])

    const fetchData = async() =>{
        let response = await axios.get("https://dummyjson.com/users");
        setUsersData(response.data.users)
    }

    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div className='chip-container'>
        <ChipElement usersData={usersData}/>
    </div>
  )
}
