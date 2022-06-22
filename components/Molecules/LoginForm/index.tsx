import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useUser } from '../../../providers/User';

import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import Input from '../../atoms/Input';

const LoginForm = () => {
  const router = useRouter();
  const { setName } = useUser();

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Mínimo de 3 carácteres')
      .matches(
        /^([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
        'Apenas letras permitidas'
      ),
  });
  return (
    <div>
      <p className='text-sm'>Please, enter your full name below</p>
      <p className='text-sm pt-4'>Only alphabetical characters are accepted</p>

      <Formik
        validationSchema={FormSchema}
        initialValues={{ name: '', isAdult: false }}
        onSubmit={({ name }) => {
          setName(name);
          router.push('brewery-list');
        }}
      >
        {({ values, errors }) => (
          <Form className='flex flex-col justify-between items-center'>
            <div className='w-full py-4'>
              <Input name='name' />
            </div>
            <div className='flex items-center text-sm pb-4'>
              <Checkbox name='isAdult' />{' '}
              <span>Are you older than 18 years old?</span>
            </div>
            <Button
              type={'submit'}
              label='Enter'
              disabled={!values.isAdult || values.name.length < 3}
              //   onClick={() => {}}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
