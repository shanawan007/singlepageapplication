import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
