import {Formik, Form,} from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../../components';

export const FormikAbstraction = () => {
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    terms: false,
    jobType: ''
  }

  return (
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-6/12 rounded-2xl">

      <h1 className="text-xl font-semibold text-black text-center">Formik Component</h1>

      <Formik
      initialValues={initialForm} 
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
                  <MyTextInput placeholder='First Name' label='First Name' name='firstName' />
                </span>

                <span className="w-1/2">
                  <MyTextInput placeholder='Last Name' label='Last Name' name='lastName' />  
                </span>
              </div>

              <MyTextInput placeholder='Email' label='Email' name='email' type='text' /> 
                 
                  <div className = "flex flex-col">
                    <MySelect name = "jobType" label='Job Type' >
                        <option value="" >Pick something</option>
                        <option value="Developer" >Developer</option>
                        <option value="Designer" >Designer</option>
                        <option value="IT-Senior" >IT-Senior</option>
                        <option value="IT-Junior" >IT-Junior</option>
                    </MySelect>
                  </div>

                  <div className = "flex flex-col">
                    <MyCheckbox name={'terms'} label = "Terminos y condiciones"  />
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
