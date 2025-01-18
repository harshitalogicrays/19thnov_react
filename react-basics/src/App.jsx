import Firstclasscomp from './components/classcomp/firstclasscomp'
import Firstfuncomp from "./components/functionalcomp/Firstfuncomp"
function App() { //functional component
  //return JSX
  return (
    <div> <h1>Hello react</h1>
      <Firstfuncomp/>
      <h2>Welcome to LRA</h2>
      <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp></Firstclasscomp>
    </div>
  )
}

export default App
