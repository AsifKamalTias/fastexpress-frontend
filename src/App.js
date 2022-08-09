import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './main.css';

import Home from './pages/Home';
import Test from './pages/Test';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Register from './pages/client/Register';
import GetIn from './pages/client/GetIn';
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/get-in" element={<GetIn/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/test" element={<Test />} />
          <Route path="/*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
