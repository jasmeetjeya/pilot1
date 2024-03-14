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
        
      </Routes>
      
    </Router>
  );
}

export default App;
