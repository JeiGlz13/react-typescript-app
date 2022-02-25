import { Suspense } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';

import { routes } from "./routes";

export const Navigations = () => {
  return (
    <Suspense fallback = {<span className='bg-gray-600 w-screen h-screen' >Loading</span>} >
      <BrowserRouter>
          <div className='' >
              <Navbar/>
              <Routes>
                  {
                    routes.map((route, index)=>(
                      <Route key={index} path = {route.path} element = {<route.Component/>} />
                    ))
                  }
                  <Route path='/*' element = {<Navigate to= {routes[0].to} replace />}  />
              </Routes>
          </div>
      </BrowserRouter>
    </Suspense>
  )
}
