import React,{useReducer} from 'react';

import './App.css';
import ClassClick from './components/ClassClick';
import CLC1 from './components/CLC1';
import ConditionalRender from './components/ConditionalRender';
import Destructuring from './components/Destructuring';
import EvenBinding from './components/EvenBinding';
import ExerciseProp from './components/ExerciseProp';
import ExercisesetState from './components/ExercisesetState';
import ExerciseState from './components/ExerciseState';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import From1 from './components/From1';
import FunctionClick from './components/FunctionClick';
import NameListAndkey from './components/NameListAndkey';
import NameList from './components/NameListAndkey';
import ParentComponent from './components/ParentComponent';
import StyleSheet from './components/StyleSheet'
import TableFrag from './components/TableFrag';
import RefDemo from './components/RefDemo';
import FRParent from './components/FRParent';
import HoverCounter from './components/HoverCounter';
import { UserProvider } from './components/Context/UserContext';
import PostList from './components/HTTP/PostList';
import Hookcounter from './components/Hook/Hookcounter';
import HookcounterTwo from './components/Hook/HookcounterTwo';
import HookCounterThree from './components/Hook/HookCounterThree';
import HookCounterFour from './components/Hook/HookCounterFour';
import HookCounterOne from './components/Hook/HookCounterOne';
import ClassCounter from './components/ClassCounter';
import ClassMouse from './components/Hook/ClassMouse';
import Classexample from './components/Classexample';
import FunctionMouse from './components/Hook/FunctionMouse';
import MouseContainer from './components/Hook/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/Hook/IntervalHookCounter';
import DataFetching from './components/HTTP/DataFetching';
import Reducer from './components/Hook/Reducer';
import Reducer2 from './components/Hook/Reducer2';
import Reducer3 from './components/Hook/Reducer3';

import ComponentC from './components/Hook/useReducerAnduseContext/ComponentC';
import ComponentA from './components/Hook/useReducerAnduseContext/ComponentA';
import ComponentB from './components/Hook/useReducerAnduseContext/ComponentB';
import DataFetchingOne from './components/HTTP/DataFetchingOne';
import DataFetchingTwo from './components/HTTP/DataFetchingTwo';
import ParentComnent from './components/Hook/useCallback/ParentCompnent'
import Count from './components/Hook/useMemo/Count';
import FocusInput from './components/Hook/Ref/FocusInput';
import ClassTime from './components/Hook/Ref/ClassTime';
import HookTimer from './components/Hook/Ref/HookTimer';





export const CountContext= React.createContext();


// const initialState=0
// const reducer=(state, action)=>{
//     switch(action){
//         case'Increament':
//             return state + 1
//         case 'Decreament':
//             return state - 1
//         case 'Reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch]=useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      <HookTimer />
      <ClassTime />
      {/* <FocusInput /> */}
      {/* <Count /> */}
      {/* <ParentComnent /> */}

      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}

      {/* Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC /> */}

      {/* <Reducer /> */}
      {/* <Reducer2 />  */}
       {/* <Reducer3 /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <FunctionMouse /> */}
      {/* <Classexample /> */}
      {/* <ClassMouse /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookcounterTwo /> */}
      {/* <Hookcounter /> */}
      {/* <PostList /> */}
      {/* <UserProvider value='Sophal '> */}
         {/* <ComponentC /> */}
      {/* </UserProvider> */}
      {/* <HoverCounter /> */}
      {/* <FRParent /> */}
      {/* <RefDemo /> */}
      {/* <TableFrag /> */}
      {/* <FragmentDemo /> */}
      {/* <CLC1 /> */}
      {/* <From1 /> */}
      {/* <Form /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameListAndkey /> */}
      {/* <ConditionalRender /> */}
      {/* <ParentComponent /> */}
      {/* <EvenBinding /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <ExerciseProp value="Say suonsophal" school="NUM"/>
      <Destructuring name='sok' heroname='class'/> */}
      {/* <ExerciseState />
      <ExercisesetState /> */}
    </div>
    //  </CountContext.Provider>
  );
}

export default App;
