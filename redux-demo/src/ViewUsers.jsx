import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeallusers, removeuser, selectUsers } from './redux/userSlice'

const ViewUsers = () => {
    // const users =  useSelector((state)=>state.user.users)
    const users =  useSelector(selectUsers)
    const dispatch = useDispatch()
  return (
    <div>  <h3>All Users</h3>
      <div class="table-responsive" >
        <table  class="table table-bordered table-striped"  >
            <thead>
                <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th><th>Password</th><th>createdAt</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.length==0 && <tr><td colSpan={6} className='text-center'>No User found</td></tr>}
                {users.map((user,index)=>
                <tr key={user.id}>
                    <td scope="row">{index+1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td scope="row">{user.password}</td>
                    <td>{user.createdAt.toISOString().split("T")[0]}</td>
                    <td><button type="button" class="btn btn-danger" onClick={()=>dispatch(removeuser(user.id))}> Remove </button>
                    </td>
                </tr>)}
            </tbody>  </table>
      </div>
      {users.length > 1 && 
      <button type="button" class="btn btn-danger btn-lg" onClick={()=>dispatch(removeallusers())}> Remove All </button> }
    </div>
  )
}

export default ViewUsers
