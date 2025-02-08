import React, { useCallback, useEffect, useState } from 'react'

const UseCallbackDemo = () => {
    let [randomValue,setRandomValue] =useState('')
    let [length,setLength] =useState(10)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let selectRef = React.useRef()
    // let generateRandom = ()=>{
    //     let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     if(numAllowed) {str+='0987654321'}
    //     if(charAllowed){str+='!@#$%^&*-_+=.'}
    //     let data=''
    //     for(let i=1;i<=length;i++){
    //         data+=str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setRandomValue(data)
    // }
    // window.onload = generateRandom
    // useEffect(()=>{ generateRandom()  },[]) //component load 


    let generateRandom = useCallback(()=>{
        let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(numAllowed) {str+='0987654321'}
        if(charAllowed){str+='!@#$%^&*-_+=.'}
        let data=''
        for(let i=1;i<=length;i++){
            data+=str.charAt(Math.floor(Math.random()*str.length))
        }
        setRandomValue(data)
    }, [length,numAllowed,charAllowed] )
    
    useEffect(()=>{ generateRandom()  },[length,numAllowed,charAllowed]) //state change

    const handleCopy = ()=>{
      window.navigator.clipboard.writeText(randomValue)
      // document.getElementById('txt').select()
      // alert(`${document.getElementById('txt').value} copied`)
      selectRef.current.select()
      alert(`${selectRef.current.value} copied`)
      selectRef.current.style.color="blue"
    }
  return (
    <div>
      <h1>useCallback Demo</h1>

        <div className="col-6">
            <div className="input-group">
                <input type="text" className="form-control" value={randomValue} id="txt" 
                ref={selectRef}/>
                <button type="button" className='btn btn-primary' onClick={handleCopy}>Copy</button>
            </div>
           <input type="range" name="length" min="5" max="100" 
           value={length}  onChange={(e)=>setLength(e.target.value)} />
           <label className='me-3'>Length: ({length})</label>

           <input type="checkbox" name="numbers" 
           onClick={()=>setNumAllowed(!numAllowed)}/> <label className='me-3'>Numbers</label>
           <input type="checkbox" name="chars" 
           onClick={()=>setCharAllowed(!charAllowed)}/> <label className='me-3' >Sp. Chars</label>

        </div>

    </div>
  )
}

export default UseCallbackDemo
