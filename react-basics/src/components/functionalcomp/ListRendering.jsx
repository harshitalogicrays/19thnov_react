import React, { Fragment } from 'react'
import DisplayList from './DisplayList'

const ListRendering = () => {
    const names = ["aaa","bbb","ccc","ddd","eeee","fff","ggg","hhh","aaa"]
  return (
   <>
          {/* {names.join(",")} */}

          {/* {names.map((value,index)=><h1 key={index}>{value}</h1>)} */}

          {/* {names.map((value,index)=><Fragment key={index}>{value}</Fragment>)} */}

            {names.map((val,i)=><DisplayList key={i} item={val} />)}

   </>
  )
}

export default ListRendering
