import Firstclasscomp from './components/classcomp/firstclasscomp'
import Addition from './components/functionalcomp/Addition'
import Childrenpropsdemo from './components/functionalcomp/Childrenpropsdemo'
import CssDemo from './components/functionalcomp/CssDemo'
import Eventsdemoinfun from './components/functionalcomp/Eventsdemoinfun'
import Firstfuncomp from "./components/functionalcomp/Firstfuncomp"
import Propsdemoinfun from './components/functionalcomp/Propsdemoinfun'
import StateDemo from './components/functionalcomp/StateDemo'
import './App.css'
import cssm from './App.module.css'
import Form1 from './components/functionalcomp/Form1'
import FormValidations from './components/functionalcomp/FormValidations'
import ReactBootstrapForm from './components/functionalcomp/ReactBootstrapForm'
import ReactHookFormDemo from './components/functionalcomp/ReactHookFormDemo'
function App() { //functional component
  //return JSX
  let c = 1
  return (
    <div className="container"> 
      {/* <h1 className='Aligntext'>Hello react</h1>
      <h2 className={cssm.error}>css module demo</h2> */}
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

            {/* <StateDemo count={c}/>
            <hr/>
            <Addition/> */}

            {/* <CssDemo/> */}
            {/* <Form1/> */}

            {/* <FormValidations/> */}
            {/* <ReactBootstrapForm/> */}
            <ReactHookFormDemo/>
    </div>
  )
}

export default App
