import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import { Navbar } from './Navbar';


export const Navigations = () => {
  return (
    <BrowserRouter>
        <div className='' >
            <Navbar/>

            <Routes>
                <Route  path='shopping' element = {<ShoppingPage/>} />
                <Route  path='users' element = {<h1 >users page</h1>} />
                <Route  path='about' element = {<h1 >about page</h1>} />

                <Route path='/*' element = {<Navigate to='/shopping' replace />}  />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
