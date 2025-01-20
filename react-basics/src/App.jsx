import Firstclasscomp from './components/classcomp/firstclasscomp'
import Firstfuncomp from "./components/functionalcomp/Firstfuncomp"
import Propsdemoinfun from './components/functionalcomp/Propsdemoinfun'
function App() { //functional component
  //return JSX
  return (
    <div className="container"> 
      <h1 className="text-danger">Hello react</h1>
      {/* <Firstfuncomp/>
      <h2>Welcome to LRA</h2>
      <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp></Firstclasscomp> */}

      <Propsdemoinfun 
          username="Ram" 
          address="Pune" 
          mobile={9876543210} 
          isActive={true} 
          isMarried={null} hobbies={['dance','music','badminton','cricket','travelling']}></Propsdemoinfun> 
<hr/>
          <Propsdemoinfun username="Monil" 
          address="Ahmedabad" />
    </div>
  )
}

export default App
