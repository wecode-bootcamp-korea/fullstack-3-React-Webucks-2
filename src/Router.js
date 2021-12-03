import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//효상님 components
// import Login_hyosang from './pages/hyosang/Login/Login';
// import List_hyosang from './pages/hyosang/List/List';
// import Detail_hyosang from './pages/hyosang/Detail/Detail';

//민호님 components
// import Login_minho from './pages/minho/Login/Login';
// import List_minho from './pages/minho/List/List';
// import Detail_minho from './pages/minho/Detail/Detail';

//태준님 components
// import Login_taejoon from './pages/taejoon/Login/Login';
// import List_taejoon from './pages/taejoon/List/List';
// import Detail_taejoon from './pages/taejoon/Detail/Detail';

//종현님 components
// import Login_zzang from './pages/zzang/Login/Login';
// import List_zzang from './pages/zzang/List/List';
// import Detail_zzang from './pages/zzang/Detail/Detail';

//진웅님 components
import Login_woong from './pages/woong/Login/Login';
import List_woong from './pages/woong/List/List';
import Detail_woong from './pages/woong/Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //효상님 route */}
        {/* <Route path="/hyosang/" element={<Login_hyosang />} /> */}
        {/* <Route path="/hyosang/list" element={<List_hyosang />} /> */}
        {/* <Route path="/hyosang/detail" element={<Detail_hyosang />} /> */}
        {/* //민호님 route */}
        {/* <Route path="/minho/" element={<Login_minho />} /> */}
        {/* <Route path="/minho/list" element={<List_minho />} /> */}
        {/* <Route path="/minho/detail" element={<Detail_minho />} /> */}
        {/* //태준님 route */}
        {/* <Route path="/taejoon/" element={<Login_taejoon />} /> */}
        {/* <Route path="/taejoon/list" element={<List_taejoon />} /> */}
        {/* <Route path="/taejoon/detail" element={<Detail_taejoon />} /> */}
        {/* //종현님 route */}
        {/* <Route path="/zzang/" element={<Login_zzang />} /> */}
        {/* <Route path="/zzang/list" element={<List_zzang />} /> */}
        {/* <Route path="/zzang/detail" element={<Detail_zzang />} /> */}
        {/* //진웅님 route */}
        <Route path="/woong/" element={<Login_woong />} />
        <Route path="/woong/list" element={<List_woong />} />
        <Route path="/woong/detail" element={<Detail_woong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
