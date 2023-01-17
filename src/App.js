import './App.css';
import React, { lazy, Suspense } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import LayoutWrapper from './shared-component/sh-layout/Layout';
const Dashboard = lazy(() => import('./views/dashboard-view/Dashboard'))
function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutWrapper>
          <Suspense fallback={<div><h1>Loading...</h1></div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </LayoutWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
