import { Field, useField } from 'formik';
import React from 'react';

interface InputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <div className='w-full relative'>
      <Field
        className='bg-white border border-gray-300 rounded h-11 w-full px-3'
        type='text'
        placeholder='Full name'
        name={name}
      />
      <p className={`text-red-500 text-sm`}>{meta?.error}</p>
    </div>
  );
};

export default Input;
