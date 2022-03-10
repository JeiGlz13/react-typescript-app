import {  NavLink } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';

export const Navbar = () => {
  return (
        <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
            <div className="flex items-center pl-6 h-20 border-b border-gray-800">
                <img src= {logo} alt="logo" className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500"/>
                <div className="ml-1">
                    <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">React JS</p>
                </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-6 space-y-1">
                <li className="px-5">
                    <div className="flex flex-row items-center h-8">
                        <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Rutas</div>
                    </div>
                </li>

                {
                    routes.map((route, index) =>(
                        <li key={index} >
                            <NavLink to= {route.to} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6
                            ">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <i className="fa-brands fa-wpforms w-5 h-5 "></i>
                                </span>

                                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                                    {route.name}
                                </span>
                            </NavLink>
                        </li>
                    ))
                }

                </ul>
            </div>
        </div>
  )
}
