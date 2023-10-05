
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
function App() {
  return (
    <Provider store={store}>
      <div className="mybox">
        <h1>App</h1>
        <Todolist></Todolist>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
