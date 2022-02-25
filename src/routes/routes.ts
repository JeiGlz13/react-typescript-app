import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface RouteInterface {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}


const LazyComponent1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const LazyComponent2 = lazy(()=> import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const LazyComponent3 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));
const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: RouteInterface[] = [
    // {
    //     to: '/lazy1',
    //     path: 'lazy1',
    //     Component: LazyComponent1,
    //     name: 'Lazy 1'
    // },
    // {
    //     to: '/lazy2',
    //     path: 'lazy2',
    //     Component: LazyComponent2,
    //     name: 'Lazy 2'
    // },
    // {
    //     to: '/lazy3',
    //     path: 'lazy3',
    //     Component: LazyComponent3,
    //     name: 'Lazy 3'
    // },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: NoLazy,
        name: 'no Lazy'
    },
    {
        to: '/lazylayout',
        path: '/lazylayout/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
]