import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

//Components
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const FocusableInput = withFocusable()(Input);
const FocusableButton = withFocusable()(Button);

function RegisterForm() {
  const history = useHistory();
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validateSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = (formik: any) => {
    console.log(formik.formik.values);
    fetch('https://63aaf83fcf281dba8c1618ee.mockapi.io/netflix/users', {
      method: 'POST',
      body: JSON.stringify({
        username: formik.formik.values.username,
        email: formik.formik.values.email,
        password: formik.formik.values.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
    history.push('/login');
  };

  const submit = (formik: any) => {
    if (formik.isValid || formik.isSubmitting) {
      return onSubmit;
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form
            className="form flex h-[100vh] items-center justify-center"
            translate={undefined}
          >
            <div
              className={`flex min-h-[600px] w-[700px] flex-col items-center justify-center rounded-[15px] bg-[#242424]`}
            >
              <span className="text-[40px]">Register Form</span>
              <div className="flex flex-col items-center justify-center">
                <FocusableInput
                  focusKey={'username'}
                  label={'Username'}
                  type={'text'}
                  color={'black'}
                  name="username"
                />
                <FocusableInput
                  focusKey={'email-register'}
                  label={'E-mail'}
                  type={'email'}
                  color={'black'}
                  name="email"
                />
                <FocusableInput
                  focusKey={'password-register'}
                  label={'Password'}
                  type={'password'}
                  color={'black'}
                  name="password"
                />

                <FocusableInput
                  focusKey={'password-confirm-register'}
                  label={'Confirm password'}
                  type={'password'}
                  color={'black'}
                  name="confirmPassword"
                />

                <FocusableButton
                  focusKey={'btn-register'}
                  text={'Register'}
                  formik={formik}
                  onEnterPress={submit(formik)}
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm;
