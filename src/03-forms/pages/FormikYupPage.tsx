import {useFormik} from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {


    const {values, handleSubmit,
       errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) =>{
            console.log(values);
        },
        validationSchema: Yup.object({
          firstName: Yup.string()
                      .max(15, 'Debe tener menos de 15 caracteres')
                      .required('Requerido'),
          lastName: Yup.string()
                      .max(15, 'Debe tener menos de 15 caracteres')
                      .required('Requerido'),
          email:  Yup.string()
                .email('Email invalido')
                .required('Requerido')
        })
    });

  return (
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-6/12 rounded-2xl">
    <h1 className="text-xl font-semibold text-black text-center">Formik Yup</h1>
    <form className="mt-6" noValidate
    onSubmit={handleSubmit} >
      <div className="flex justify-between gap-3">
        <span className="w-1/2">
          <label  className="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
          <input id="firstName" type="text" placeholder="John"  
            {...getFieldProps('firstName')}
          value = {values.firstName}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          {
            (touched.firstName && errors.firstName) && <span className="text-red-500 text-sm">{errors.firstName}</span>
          }
        </span>

        <span className="w-1/2">
          <label  className="block text-xs font-semibold text-gray-600 uppercase">Last Name</label>
        <input id="lastName" type="text" placeholder="Doe"  
        {...getFieldProps('lastName')}
        value = {values.lastName}
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
         {
            (touched.lastName && errors.lastName) && <span className="text-red-500 text-sm">{errors.lastName}</span>
          }
        
        </span>
      </div>

      <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
      <input id="email" type="email" placeholder="john.doe@company.com" 
        {...getFieldProps('email')}
      value = {values.email}
      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
       {
            (touched.email && errors.email) && <span className="text-red-500 text-sm">{errors.email}</span>
      }


      <input type="submit" 
      className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
      value='Submit' />
    </form>
  </div>
  )
}
