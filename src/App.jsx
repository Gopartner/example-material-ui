import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarMenuScroll from './components/SidebarMenuScroll';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
	setIsLoggedIn(false);
  };

  return (
    <div className="App">

      <Router>                                            <Navbar                                             isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}                       onMenuItemClick={(content) => {
          console.log(content);                           }}                                              />

      <SidebarMenuScroll />

      <Routes>                                            <Route path="/" element={<HomePage />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;

