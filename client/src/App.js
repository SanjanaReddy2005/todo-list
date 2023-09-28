import './App.css';
import './index.css';
import {Header} from './components/Header';
import {Form} from './components/Form';
import {Todo} from './components/ToDo';


function App() {
  return (
    <div className="App">
       <Header />
       <Form />
       <Todo />
       
    </div>
  );
}

export default App;
 