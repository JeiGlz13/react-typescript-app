import {useFormik} from 'formik';

export const FormikBasicPage = () => {
    const {handleChange, values, handleSubmit} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) =>{
            console.log(values);
        }
    });

  return (
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-6/12 rounded-2xl">
    <h1 className="text-xl font-semibold text-black text-center">Formik Basic Tutorial</h1>
    <form className="mt-6"
    onSubmit={handleSubmit} >
      <div className="flex justify-between gap-3">
        <span className="w-1/2">
          <label  className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
          <input id="firstName" type="text" name="firstName" placeholder="John"  
          onChange={handleChange}
          value = {values.firstName}
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          <span className="text-red-500 text-sm">First Name obligatorio</span>
        </span>

        <span className="w-1/2">
          <label  className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
        <input id="lastName" type="text" name="lastName" placeholder="Doe"  
        onChange={handleChange}
        value = {values.lastName}
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>

      <label  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
      <input id="email" type="email" name="email" placeholder="john.doe@company.com" 
      onChange={handleChange}
      value = {values.email}
      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      
      <input type="submit" 
      className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
      value='Submit' />
      <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
    </form>
  </div>
  )
}
