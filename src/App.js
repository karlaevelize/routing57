import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      Pokemon App
      {/* Naviagtionn goes here */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:name" element={<Details/>}/>
      </Routes>
      {/* Footer goes here */}
    </div>
  );
}

export default App;
