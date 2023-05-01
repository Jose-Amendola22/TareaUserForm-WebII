import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar.tsx';
import ResponsiveAppBar from './components/ResponsiveAppBar.tsx';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Home from "./screens/Home.tsx"
import About from "./screens/About.tsx"
import TermsAndConditions from "./screens/TermsAndConditions.tsx"
import UsersScreen from './screens/UsersScreen.tsx';
import EditUser from './screens/EditUser.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NavBar/> */}
    <Router>
    <ResponsiveAppBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UsersScreen/>}/>
          <Route path="/users/:id" element={<EditUser/>}/>
          <Route path="/about/:id" element={<About/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
          <Route path="/EditUser" element={<EditUser/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
