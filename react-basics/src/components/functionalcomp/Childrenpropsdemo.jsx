// import React from 'react'

// const Childrenpropsdemo = (props) => {
//   return (
//   <>
//     <h1>Children props demo</h1>
//     <h2>{props.company}</h2>
//     {/* {props.children} */}
//     {props.children[2]}
//   </>
//   )
// }

// export default Childrenpropsdemo


import React from 'react'

const Childrenpropsdemo = ({company,children}) => {
  return (
  <>
    <h1>Children props demo</h1>
    <h2>{company}</h2>
    {/* {children} */}
    {children[2]}
  </>
  )
}

export default Childrenpropsdemo