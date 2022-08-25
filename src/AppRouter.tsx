import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLogin from './Pages/MainLogin';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
