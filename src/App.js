import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
