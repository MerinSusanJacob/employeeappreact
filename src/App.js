import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homedb from './components/Homedb';
import Formemp from './components/Formemp';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homedb/>}/>
        <Route path="/form" element={<Formemp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
