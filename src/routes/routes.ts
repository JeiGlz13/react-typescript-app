import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
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
        to: '/user',
        path: 'user',
        Component: UserPage,
        name: 'User'
    },
]