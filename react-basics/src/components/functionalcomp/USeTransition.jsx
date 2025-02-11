import React, { useState, useTransition } from 'react'

// const USeTransitionDemo = () => {
//     let [arr,setArr] = useState([])
//     let [isLoading,setIsLoading] =useState(false)
//     const createArray=()=>{
//         setIsLoading(true)
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             setArr(data)
//             setIsLoading(false)
//             })
//         .catch(err=>{
//             console.log(err);setIsLoading(false)
//     })
//     }
//   return (
//     <div>
//       <button type="button" className=' btn btn-primary' onClick={createArray} disabled={isLoading}>Create Array </button>
//      {/* {isLoading && <h1>Loading....</h1>} */}
//      <br/>
//      {isLoading && <div class="spinner-border"></div>}
//      {arr.map((item,i)=><h5 key={i}>{item.name}</h5>)}
//     </div>
//   )
// }


const USeTransitionDemo = () => {
    let [arr,setArr] = useState([])
    const [isPending, startTransition] = useTransition();
    const createArray=()=>{
        // startTransition(()=>{
        //     fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res=>res.json())
        //     .then(data=>{ setArr(data) })
        //     .catch(err=>{  console.log(err)}) })

        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,4000))
          })   
    }
  return (
    <div>
      <button type="button" className=' btn btn-primary' onClick={createArray} 
      disabled={isPending}>Create Array </button><br/>
      {isPending && <div class="spinner-border"></div>}
     {/* {arr.map((item,i)=><h5 key={i}>{item.name}</h5>)} */}
    </div>
  )
}

export default USeTransitionDemo
