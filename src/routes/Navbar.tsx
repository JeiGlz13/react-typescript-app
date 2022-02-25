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
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </span>

                                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                                    {route.name}
                                </span>
                            </NavLink>
                        </li>
                    ))
                }

                <li className="px-5">
                    <div className="flex flex-row items-center h-8">
                        <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                            Settings
                        </div>
                    </div>
                </li>
                
                <li>
                <NavLink to='/' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    </span>
                    <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Settings</span>
                </NavLink>
                </li>
                <li>
                <NavLink to='/' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4 text-red-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    </span>
                    <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Logout</span>
                </NavLink>
                </li>
            </ul>
            </div>
        </div>
  )
}
