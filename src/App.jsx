import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
    <div className="mybox">
      <h1>App</h1>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
