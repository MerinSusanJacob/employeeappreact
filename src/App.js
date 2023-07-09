import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homedb from './components/Homedb';
import Formemp from './components/Formemp';

function App() {
  return (
    <div className="App">
      <Header/>
      <HashRouter>
      <Routes>
        <Route path="/home" element={<Homedb/>}/>
        <Route path="/form" element={<Formemp/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
