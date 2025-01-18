import Firstclasscomp from './components/classcomp/firstclasscomp'
import Firstfuncomp from "./components/functionalcomp/Firstfuncomp"
function App() { //functional component
  //return JSX
  return (
    <div className="container"> 
      <h1 className="text-danger">Hello react</h1>
      <Firstfuncomp/>
      <h2>Welcome to LRA</h2>
      <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp></Firstclasscomp>
    </div>
  )
}

export default App
