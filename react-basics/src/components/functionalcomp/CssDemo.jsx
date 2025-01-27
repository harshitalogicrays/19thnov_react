import React from 'react'
// import cssm from '../../App.module.css'
const CssDemo = () => {
    let imgstyles = {
        border:"2px solid blue",
        borderRadius:"10px"  }
  return (
    <> <h1 style={{color:"purple" , backgroundColor : "gray"}}>Inline CSS</h1><hr/>
        <p style={imgstyles}> css variable</p>
        <h2 className='Aligntext'>css file</h2>
         <h2 className={cssm.error}>css module demo</h2>
    </>
  )
}

export default CssDemo
