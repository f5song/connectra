// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Chat from '@/pages/Chat';
import NotFound from '@/pages/404';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

