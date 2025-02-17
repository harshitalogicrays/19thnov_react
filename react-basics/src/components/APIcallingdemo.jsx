import axios from 'axios'
import React, { useEffect, useState } from 'react'

const APIcallingdemo = () => {
    let [data,setData] =useState([])
    useEffect(()=>{ getData() },[])

    // const getData = ()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{
    //         // console.log(res)
    //         return res.json()
    //     })
    //     .then((result)=>{
    //         // console.log(result)
    //         setData(result)
    //     })
    //     .catch(err=>console.log(err))
    // }

    // const getData = async()=>{
    //     try{
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users")
    //         const result = await res.json()
    //         setData(result)
    //     }
    //     catch(err){  console.log(err)   }
    // }

    // const getData = ()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{console.log(res.data) 
    //         setData(res.data)
    //       })
    //     .catch(err=>console.log(err))
    // }

    const getData = async()=>{
        try{
            const res = await  axios.get("https://jsonplaceholder.typicode.com/users")
            setData(res.data)
        }
        catch(err){console.log(err)}
    }
  return (
    <div>
        <h1>API Demo</h1>
      {/* {data.map((d,i)=><h3 key={i}>{JSON.stringify(d)}</h3>)} */}
      {data.map((d,i)=><h3 key={i}>{d.name}</h3>)}

    </div>
  )
}

export default APIcallingdemo
