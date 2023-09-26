import Counter from './Counter';
import './App.css';
import Todolist from './Todolist';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className='mybox'>
      <h1>ReactJS Application by Praveen Gubbala</h1>
      <Link to="/counter">Counter</Link>&nbsp;&nbsp;
      <Link to="/todolist">Todolist</Link>&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
