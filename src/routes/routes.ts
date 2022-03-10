import { FormikBasicPage,
FormikAbstraction,
FormikComponentPage,
FormikYupPage,
RegisterPage } from '../03-forms/pages';

type JSXComponent = () => JSX.Element;

interface RouteInterface {
    to: string,
    path: string,
    Component: JSXComponent,
    name: string
}

export const routes: RouteInterface[] = [
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register Page'
    },
    {
        to: '/formikbasic',
        path: 'formikbasic',
        Component: FormikBasicPage,
        name: 'Formik Basic'
    },
    {
        to: '/formik-yup',
        path: 'formik-yup',
        Component: FormikYupPage,
        name: 'Formik Yup'
    },
    {
        to: '/formik-component',
        path: 'formik-component',
        Component: FormikComponentPage,
        name: 'Formik Component'
    },
    {
        to: '/formik-abstraction',
        path: 'formik-abstraction',
        Component: FormikAbstraction,
        name: 'Formik Abstraction'
    },
]