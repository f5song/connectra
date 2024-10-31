// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Chat from '@/pages/Chat';
import NotFound from '@/pages/404';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

export default App;

