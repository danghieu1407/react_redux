import logo from './logo.svg';
import './App.css';
import Headers from './Components/Header/Header';
import {useState} from 'react';
import Editpage from './Components/Edit/Editpage';

function App() {
	const [isEdit, setEdit] = useState(false);

  return (
    <div className="App">
      {isEdit ? (  <Editpage />) : ( <Headers setEdit = {setEdit} />) }
         
    </div>
  );
}

export default App;
