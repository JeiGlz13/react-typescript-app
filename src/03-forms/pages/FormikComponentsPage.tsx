import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export const FormikComponentPage = () => {

  return (
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-6/12 rounded-2xl">

      <h1 className="text-xl font-semibold text-black text-center">Formik Component</h1>

      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        terms: false,
        jobType: ''
      }} 
      onSubmit = {(values)=>{
        console.log(values)
      }}
      validationSchema = {
        Yup.object({
          firstName: Yup.string()
                      .max(15, 'Debe tener menos de 15 caracteres')
                      .required('Requerido'),
          lastName: Yup.string()
                      .max(15, 'Debe tener menos de 15 caracteres')
                      .required('Requerido'),
          email: Yup.string()
                      .email('Email invalido')
                      .required('Requerido'),
          jobType: Yup.string()
                      .required('requerido')
                      .notOneOf([''], 'Seleccione una opcion') ,
          terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar las condiciones')
          
        })
      } >
         {
           (formik) =>(
            <Form>
              <div className="flex justify-between gap-3">
                <span className="w-1/2">
                  <label  className="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
                  <Field name = "firstName" type = "text" 
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
                  <ErrorMessage name='firstName' component="span"
                  className="text-red-500 text-sm" />
                </span>

                <span className="w-1/2">
                  <label  className="block text-xs font-semibold text-gray-600 uppercase">Last Name</label>
                  <Field name = "lastName" type = "text"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
                  <ErrorMessage name='lastName' component="span"
                  className="text-red-500 text-sm" />      
                </span>
              </div>

                  <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                  <Field name = "email" type = "text"
                  className = "block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
                  <ErrorMessage name='email' component="span"
                  className="text-red-500 text-sm" />
                 
                  <div className = "flex flex-col">
                    <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Job Type</label>
                    <Field name = "jobType" as = "select"
                    className = "text-gray-700" >
                        <option value="" ></option>
                        <option value="Developer" >Developer</option>
                        <option value="Designer" >Designer</option>
                        <option value="IT-Senior" >IT-Senior</option>
                        <option value="IT-Junior" >IT-Junior</option>
                    </Field>
                    <ErrorMessage name='jobType' component="span"
                    className="text-red-500 text-sm" />
                  </div>

                  <div className = "flex flex-col">
                    <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Terminos y condiciones</label>
                    <Field name = "terms" type = "checkbox" />
                    <ErrorMessage name='terms' component="span"
                    className="text-red-500 text-sm" />
                  </div>


              <input type="submit" 
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              value='Submit' />
            </Form>
           )
         }
      </Formik>
  </div>
  )
}
