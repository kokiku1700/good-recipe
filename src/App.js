import { useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Router from './component/Router';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get("http://localhost:4000")
    .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
