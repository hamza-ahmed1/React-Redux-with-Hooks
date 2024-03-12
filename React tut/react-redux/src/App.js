import logo from './logo.svg';
import './App.css';
import { UseSelector,UseDispatch, useSelector, useDispatch } from 'react-redux';
import { decreament, increament } from './action';
function App() {
 const int_count_state= useSelector((state)=>state.inc_dec);
 const dispatch=useDispatch();
  return (
    <div className="App">
      <input type='text' value={int_count_state}/>
      <br/>
      <button onClick={()=>{dispatch(decreament())}}>dec</button>&nbsp;&nbsp;
      <button onClick={()=>{dispatch(increament())}}>inc</button>

    </div>
  );
}

export default App;
