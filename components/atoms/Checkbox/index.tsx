import { Field } from 'formik';
import React from 'react';

interface CheckboxProps {
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name }) => {
  return (
    <Field
      className='mx-2 w-4 h-4 rounded-md border border-white outline-white'
      type='checkbox'
      name={name}
    />
  );
};

export default Checkbox;
