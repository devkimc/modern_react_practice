import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostListPage />} exact={true} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;