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
import FAQ from './pages/FAQ';
import HowItWorks from './pages/HowItWorks';
import TermsConditions from './pages/TermsConditions';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Profile from './pages/client/Profile';
import ProfileEdit from './pages/client/ProfileEdit';
import ProfileEditPicture from './pages/client/ProfileEditPicture';
import ProfileEditPassword from './pages/client/ProfileEditPassword';
import ForgotPassword from './pages/client/ForgotPassword';

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
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/edit" element={<ProfileEdit/>}/>
          <Route path="/profile/edit/picture" element={<ProfileEditPicture/>}/>
          <Route path="/profile/edit/password" element={<ProfileEditPassword/>}/>
          <Route path="client/forgot-pass" element={<ForgotPassword/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/how-it-works" element={<HowItWorks/>} />
          <Route path="/terms-conditions" element={<TermsConditions/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/test" element={<Test />} />
          <Route path="/*" element={<div>404</div>} />
          <Route path="/abort" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
