import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Create_Students from './Create_Students';
import Home from './Home'
import Error from './Error';
import Edit from './Edit';
import Delete from './Delete';
import Update from './Update';

function App() {
  return (
<BrowserRouter>
  {/* <Create_Students/> */}
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/Create' element={<Create_Students/>} />
  <Route path='/Error' element={<Error/>}/>
  <Route path='/Delete/:id' element={<Delete/>}/>
  <Route path='/Update/:id' element={<Update/>}/>
</Routes>
{/* <Edit/> */}
</BrowserRouter>
  );
}

export default App;
