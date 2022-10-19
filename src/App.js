import './App.css';
import {useEffect, useState} from 'react';
import {Form} from "./components/Form"
import { Discussions } from './components/Discussions';
function App() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
   fetch('http://localhost:4000/discussions') 
   .then(res => res.json())
   .then(data => {
    setDiscussions(data);
   })
  }, []);
  return (
    <div>
      <Form />
      <Discussions discussions={discussions}></Discussions>
    </div>
  );
}

export default App;
