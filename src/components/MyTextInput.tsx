import { useField, ErrorMessage } from 'formik';

interface PropsInputInterface {
    label?: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]: any;
}

export const MyTextInput = ({label, ...props}: PropsInputInterface) => {
   const [field] = useField(props);
  return (
    <>
        <label  className="block text-xs font-semibold text-gray-600 uppercase">{label}</label>
        <input className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
        placeholder={props.placeholder}
        {...field} {...props} />
        <ErrorMessage name={props.name} component = "span" className='text-red-500 text-sm' />
    </>
  )
}
