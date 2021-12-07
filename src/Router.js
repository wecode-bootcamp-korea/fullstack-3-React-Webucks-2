import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//효상님 components
import Login_hyosang from "./pages/hyosang/Login/Login";
import List_hyosang from "./pages/hyosang/List/List";
import Detail_hyosang from "./pages/hyosang/Detail/Detail.js"; 

//민호님 components

//태준님 components

//종현님 components

//진웅님 components

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //효상님 route */}
        <Route path="/hyosang" element={ <Login_hyosang /> } />
        <Route path="/hyosang/list" element={ <List_hyosang /> } />
        <Route path="/hyosang/detail" element={ <Detail_hyosang /> } />
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
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
