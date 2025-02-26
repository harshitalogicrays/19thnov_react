import { ToastContainer } from "react-toastify"
import AddUser from "./AddUser"
import ViewUsers from "./ViewUsers"

function App() {
  return (
  <div className="container;fluid mt-5 p-3 shadow">
    <ToastContainer position="bottom-left"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme="colored"/>
    <h1>Redux Demo</h1><hr/>
    <div className="row">
      <div className="col"><AddUser/></div>
      <div className="col"><ViewUsers/></div>
    </div>
  </div>
  )
}

export default App
