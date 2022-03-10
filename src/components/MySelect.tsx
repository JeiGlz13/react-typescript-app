import { useField, ErrorMessage } from 'formik';

interface PropsSelectInterface {
    label?: string;
    name: string;
    [x:string]: any;
}

export const MySelect = ({label, ...props}: PropsSelectInterface) => {
   const [field] = useField(props);
  return (
    <>
        <label  className="block text-xs font-semibold text-gray-600 uppercase">{label}</label>
        
        <select className = "text-gray-700" {...field} {...props} title = {props.placeholder}  />

        <ErrorMessage name={props.name} component = "span" className='text-red-500 text-sm' />
    </>
  )
}
