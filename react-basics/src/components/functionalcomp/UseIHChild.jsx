import React, { forwardRef, useImperativeHandle, useState } from 'react'

const UseIHChild = (props,ref) => {
    const [data,setData] =useState('')

    useImperativeHandle(ref , ()=>({
        setValue(val){setData(val)},
        getValue(){return data},
        clearValue(){setData("")}
    })
)

  return (
    <div>
      <h1>{props.title}</h1>
     
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
    </div>
  )
}

export default forwardRef(UseIHChild)
