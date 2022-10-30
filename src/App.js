// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageOne/>}></Route>
        <Route path='/PageTwo' element={<PageTwo/>}></Route>
        <Route path='/PageThree' element={<PageThree/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
