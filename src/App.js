import './App.css';
import { ContextParent } from './components/Context/ContextParent';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { ChildOne } from './components/Optimisation/ChildOne';
import { GrandParent } from './components/Optimisation/GrandParent';
import { ParentOne } from './components/Optimisation/ParentOne';
import { ParentTwo } from './components/Optimisation/ParentTwo';
import { Parent } from './components/Parent Child/Parent';
import { UseReducer } from './components/UseReducer/UseReducer';
import { UseState } from './components/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState /> 
      <UseReducer /> */}

      {/* <ObjectUseState /> */}

      {/* <Parent />  */}

      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}

       {/* <GrandParent /> */}
       
       {/* <ParentTwo /> */}

       <ContextParent />

    </div>
  );
}

export default App;
