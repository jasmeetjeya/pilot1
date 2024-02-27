// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import {Courses} from './Courses';
import {Teachers} from './Teachers';
import { Contact } from './Contact';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Navbar from './Navbar';
import { Footer } from './Footer';
import LoginAdmin from './LoginAdmin';
import AdminPanel from './AdminPanel';
import AddTeacher from './AddTeacher';
import Schedule from './Schedule';
import AddCourse from './AddCourse';
function App() {
 
  return (
    
    <Router>
    
      
      
      <Routes>
        
        <Route path='/'Component={Home}exact/>
        <Route path='/about'Component={About}exact/>
        <Route path='/Courses'Component={Courses}exact/>
        <Route path='/Teachers'Component={Teachers}exact/>
        <Route path='/Contact'Component={Contact}exact/>
        <Route path='/LoginForm'Component={LoginForm}exact/>
        <Route path='/SignupForm'Component={SignupForm}exact/>
        <Route path='/admin'Component={LoginAdmin}exact/>
        <Route path='/adminpanel'Component={AdminPanel}exact/>
        <Route path='/addteacher'Component={AddTeacher}exact/>
        <Route path='/teacherschedule'Component={Schedule}exact/>
        <Route path='/addcourse'Component={AddCourse}exact/>
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;
