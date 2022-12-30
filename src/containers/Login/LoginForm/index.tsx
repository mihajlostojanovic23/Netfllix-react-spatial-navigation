import React from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

//Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';
//import { UserContext } from '../../../context/userContext';

const FocusableInput = withFocusable()(Input);
const FocusableButton = withFocusable()(Button);

interface IDb {
  email: string;
  password: string;
  username: string;
  userid: string;
}
function LoginForm() {
  // const { setUserId, setUserInfo } = useContext(UserContext);
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };

  const validateSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
  });

  const onSubmit = ({ values, setErrors }: any) => {
    console.log(values);
    const { email, password } = values;

    fetch('https://63aaf83fcf281dba8c1618ee.mockapi.io/netflix/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // eslint-disable-next-line array-callback-return
        data.map((db: IDb) => {
          console.log(db, 'login form db data');
          if (db.email === email && db.password === password) {
            console.log(db);
            localStorage.setItem('User', db.userid);

            history.push('/');
          } else {
            setErrors({ password: 'Error Pass' });
            console.log('Error');
          }
        });
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="form" translate={undefined}>
            <div className="rounded-[15px] bg-[#7575753d] py-[30px] shadow-2xl">
              <span className="text-[40px]">Login</span>
              <div className="flex h-[500px] w-[700px] flex-col items-center justify-center  text-[white]">
                <FocusableInput
                  focusKey={'Mail'}
                  type={'mail'}
                  color={'black'}
                  label={'Email'}
                  name={'email'}
                />
                <FocusableInput
                  focusKey={'Password'}
                  type={'password'}
                  color={'black'}
                  label={'Password'}
                  name={'password'}
                />
                <FocusableButton
                  text={'Sign in'}
                  focusKey={'SignIn-button'}
                  onEnterPress={() => onSubmit(formik)}
                  formik={formik}
                  disabled={!formik.isValid || formik.isSubmitting}
                />

                <span className="text-[20px]">Or</span>
                <FocusableButton
                  text={'Register'}
                  focusKey={'Resgister-button'}
                  onEnterPress={() => history.push('/register')}
                  formik={formik}
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
