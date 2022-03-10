import { useField, ErrorMessage } from 'formik';

interface PropsCheckboxInterface {
    label?: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]: any;
}

export const MyCheckbox = ({label, ...props}: PropsCheckboxInterface) => {
   const [field] = useField({...props, type: 'checkbox'});
  return (
    <>
        <label  className="block text-xs font-semibold text-gray-600 uppercase">
            {label}

            <input type="checkbox" {...field} {...props} />
        </label>
        <ErrorMessage name={props.name} component = "span" className='text-red-500 text-sm' />
    </>
  )
}
