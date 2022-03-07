import { AboutPage } from '../03-forms/pages/AboutPage';
import { HomePage } from '../03-forms/pages/HomePage';
import { UserPage } from '../03-forms/pages/UserPage';

type JSXComponent = () => JSX.Element;

interface RouteInterface {
    to: string,
    path: string,
    Component: JSXComponent,
    name: string
}

export const routes: RouteInterface[] = [
    {
        to: '/home',
        path: 'home',
        Component: HomePage,
        name: 'Home'
    },
    {
        to: '/about',
        path: 'about',
        Component: AboutPage,
        name: 'About'
    },
    {
        to: '/user',
        path: 'user',
        Component: UserPage,
        name: 'User'
    },
]