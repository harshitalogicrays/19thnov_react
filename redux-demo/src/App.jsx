import { useDispatch } from "react-redux"
import { addusers } from "./redux/userSlice"

function App() {
  const dispatch = useDispatch()
  const handleAddUser = ()=>{
    dispatch(addusers({str:"hello",count:1}))
  }
  return (
  <>
    <h1>Redux Demo</h1>
    <button type="button" onClick={handleAddUser}>Add Users</button>
  </>
  )
}

export default App
