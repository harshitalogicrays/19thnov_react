  import React, { useEffect, useState } from 'react'
  
  const useFetchApiData = (url) => {
    let [data,setData]  = useState([])
    const getData =async()=>{
      try{
        const res = await fetch(url)
        const data1 =  await res.json()
        setData(data1)
      }
      catch(err){console.log(err)}
    }
    useEffect(()=>{
      getData()
    },[])
    return ({data})
  }
  
  export default useFetchApiData
  