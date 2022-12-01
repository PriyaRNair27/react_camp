import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Course from './Components/Course';
import Movieapp from './Components/Movieapp';

function App() {
  return (
    <div >
      <BrowserRouter>
 <Routes>
  <Route path='/'exact element={< Header/>}/>
  <Route path='/new'exact element={< Movieapp/>}/>
  <Route path='/course'exact element={< Course/>}/>
  
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
