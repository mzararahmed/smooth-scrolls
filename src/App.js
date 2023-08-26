import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothPageScroll from './Components/SmoothPageScroll';
import FullPageReactApp from './Components/FullPageReactApp';
import FullPageReact from './Components/FullPageReact';
import SmoothScroll from './Components/SmoothScroll';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<FullPageReact />} />
          <Route exact path='/scroll' element={<SmoothPageScroll />} />
          <Route path='/scrollto' element={<SmoothScroll />} />
          <Route path='/flickto' element={<FullPageReactApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
