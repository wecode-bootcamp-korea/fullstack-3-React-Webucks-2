import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//효상님 components

//민호님 components

//태준님 components

//종현님 components

//진웅님 components
import Login from './pages/woong/Login/Login';
import List from './pages/woong/List/List';
import Detail from './pages/woong/Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //효상님 route */}
        <Route />
        <Route />
        <Route />
        {/* //민호님 route */}
        <Route />
        <Route />
        <Route />
        {/* //태준님 route */}
        <Route />
        <Route />
        <Route />
        {/* //종현님 route */}
        <Route />
        <Route />
        <Route />
        {/* //진웅님 route */}
        <Route path="/woong/" element={<Login />} />
        <Route path="/woong/list" element={<List />} />
        <Route path="/woong/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
