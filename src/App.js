import './App.css';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import LogIn from './routes/log-in/login-in-component';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="log-in" element={<LogIn />} />
      </Route>
    </Routes>
  );
}

export default App;
