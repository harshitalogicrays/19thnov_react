import { Outlet } from 'react-router'
import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
  <>
    {/* <h1 className='underline text-3xl font-bold text-red-900 bg-blue-400 p-3'>
      Hello world!
    </h1>
    <button type="button" className='bg-gray-500 m-10 p-3 rounded-2xl text-white font-bold hover:bg-gray-400 hover:text-2xl transition-all duration-1000 ease-in-out md:w-2xl'>click me</button> */}
   
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
    <Outlet/>
  </>
  )
}

export default App
