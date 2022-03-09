import { MouseEvent } from 'react';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const {formData, handleInputChange, resetForm, isValidEmail,
  name, email, password, password2} = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>{
      e.preventDefault();
      console.log(formData);
      resetForm();
  }

  return (
    <div className="mt-6 relative py-3 sm:max-w-xl sm:mx-auto" >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
           
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 max-w-xl mx-auto">
                <h1 className="text-2xl font-semibold text-black text-center">Register</h1>
                
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    
                    <div className="relative">
                      <input id="name" name="name" value={name}
                      onChange = {handleInputChange}
                      type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                      <label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                    </div>
                    {
                      (name.trim().length<=0)&&<span className='text-red-500 text-xs' >Este campo es obligatorio</span>
                    }

                    <div className="relative">
                      <input id="email" name="email" value={email}
                      onChange = {handleInputChange}
                      type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                      <label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                    </div>
                    {
                      !isValidEmail(email)&&<span className='text-red-500 text-xs' >Email no es valido</span>
                    }

                    <div className="relative">
                      <input id="password" name="password" value={password}
                      onChange = {handleInputChange}
                      type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                    </div>
                    {
                      (password.trim().length<=0)&&<span className='text-red-500 text-xs' >Este campo es obligatorio</span>
                    }
                    {
                      (password.trim().length<6&&password.trim().length>0)&&<span className='text-red-500 text-xs' >Password debe tene mas de 6 caracteres</span>
                    }

                    <div className="relative">
                      <input id="password2" name="password2" value={password2}
                      onChange = {handleInputChange}
                      type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Repeat Password</label>
                    </div>
                    {
                      (password2.trim().length<=0)&&<span className='text-red-500 text-xs' >Este campo es obligatorio</span>
                    }
                    {
                      (password2.trim().length<6&&password2.trim().length>0)&&<span className='text-red-500 text-xs' >Password debe tene mas de 6 caracteres</span>
                    }

                    <div className="relative">
                      <button className="bg-blue-500 text-white rounded-lg px-2 py-1"
                        onClick={onSubmit} >
                         Register
                      </button>
                    </div>
                  </div>
                </div>
            </div>
    </div>
  )
}
