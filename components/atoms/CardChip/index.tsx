import { Formik } from 'formik';
import React, { useState } from 'react';
import Input from '../Input';
import { CheckCircleIcon } from '@heroicons/react/outline';

interface CardChipProps {
  label?: string;
  icon?: React.ReactNode;
  editable?: boolean;
}

const CardChip: React.FC<CardChipProps> = ({ label, icon, editable }) => {
  const [labelState, setLabelState] = useState('');
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState(false);

  const handleEditLabel = (value: string) => {
    setLabelState(value);
    setEditing(false);
  };

  if (!label) return <></>;
  return (
    <div
      className={`bg-primary rounded-xl flex px-2 py-1 min-w-[8rem] items-center ${
        editable && 'cursor-pointer'
      }`}
      onClick={() => {
        editable && setEditing(true);
      }}
    >
      {icon && !labelState && (
        <div className='h-6 w-6 mr-2'>
          {editing ? <CheckCircleIcon /> : icon}
        </div>
      )}

      {!editing ? (
        labelState || label
      ) : (
        <input
          autoFocus
          className='w-20 rounded-md px-1'
          type='text'
          onBlur={(e) => {
            handleEditLabel(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              handleEditLabel(e.currentTarget.value);
            }
          }}
        />
      )}
    </div>
  );
};

export default CardChip;
