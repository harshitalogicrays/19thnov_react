import Firstclasscomp from './components/classcomp/firstclasscomp'
import Addition from './components/functionalcomp/Addition'
import Childrenpropsdemo from './components/functionalcomp/Childrenpropsdemo'
import Eventsdemoinfun from './components/functionalcomp/Eventsdemoinfun'
import Firstfuncomp from "./components/functionalcomp/Firstfuncomp"
import Propsdemoinfun from './components/functionalcomp/Propsdemoinfun'
import StateDemo from './components/functionalcomp/StateDemo'
function App() { //functional component
  //return JSX
  let c = 1
  return (
    <div className="container"> 
      <h1 className="text-danger">Hello react</h1>
      {/* <Firstfuncomp/>
      <h2>Welcome to LRA</h2>
      <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp></Firstclasscomp> */}

      {/* <Propsdemoinfun 
          username="Ram" 
          address="Pune" 
          mobile={9876543210} 
          isActive={true} 
          isMarried={null} hobbies={['dance','music','badminton','cricket','travelling']}></Propsdemoinfun> 
<hr/>
          <Propsdemoinfun username="Monil" 
          address="Ahmedabad" /> */}

          {/* <Childrenpropsdemo company="LRA">
            <h3>heading3</h3>
            <p>rjlktjrkjy</p>
            <Firstfuncomp/>
          </Childrenpropsdemo> */}

          {/* <Eventsdemoinfun/> */}

            <StateDemo count={c}/>
            <hr/>
            <Addition/>
    </div>
  )
}

export default App
