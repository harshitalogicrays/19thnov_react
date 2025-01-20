/*import React, { Fragment } from 'react'
const Propsdemoinfun = (props) => {
    //props = {username:"Ram",address:"Pune"}
    console.log(props)
  return (
    <Fragment>
      <h1>Props Demo</h1>
      <h2>Name: {props.username}</h2>
      <h2>{props.address}</h2>

      <h3>{props.hobbies.join(",")}</h3>

      {props.isActive ? <h1>{props.username} is active</h1>  : "user is not active"}

      {props.address=="Pune" && <React.Fragment>
      <h1>{props.username} is Active user</h1>
      <h2>Welcome Back!!</h2>
      </React.Fragment>
      }

    {props.address=="Pune" || 
     <>
        <h1 className='text-primary'>{props.username} is Active user</h1>
        <h2>Welcome Back!!</h2>
      </>
      }
    </Fragment>
  )
}

export default Propsdemoinfun */


import React, { Fragment } from 'react'
const Propsdemoinfun = ({username="Siya" , address , isActive=false,hobbies=[]}) => {
    //let {username , address , isActive,hobbies} = props
  return (
    <Fragment>
      <h1>Props Demo</h1>
      <h2>Name: {username}</h2>
      <h2>{address}</h2>
      <h3>{hobbies.join(",")}</h3>

      {isActive ? <h1>{username} is active</h1>  : "user is not active"}

      {address=="Pune" && <React.Fragment>
      <h1>{username} is Active user</h1>
      <h2>Welcome Back!!</h2>
      </React.Fragment>}

    {address=="Pune" || 
     <> <h1 className='text-primary'>{username} is Active user</h1> </> }
    </Fragment>
  )
}

export default Propsdemoinfun

