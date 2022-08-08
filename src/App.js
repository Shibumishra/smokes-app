import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from './components/MainHeader';
import PageNotFound from './components/PageNotFound';
import All from './components/All';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Menu4 from './components/Menu4';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainHeader />}>
          <Route index element={<All />} />
          <Route path='menu1' element={<Menu1 />} />
          <Route path='menu2' element={<Menu2 />} />
          <Route path='menu3' element={<Menu3 />} />
          <Route path='menu4' element={<Menu4 />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
