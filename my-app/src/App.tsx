import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';



const App: React.FC = () => {
  return (
    <Router>
      <div >
      <div className='project-container'>
        <Header/>
          <div className='content'>
            <Link to='/'></Link>
            
          </div>  
        <Footer/>
      </div>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
