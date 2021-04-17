import React, { useState, useEffect, useCallback } from 'react';
import TextInput from '../components/ui/TextInput';
import PasswordInput from '../components/ui/PasswordInput';

const Login = ({ login, authenticationError }) => {
  const [loginInput, setloginInput] = useState(null);
  const [validate, setValidate] = useState(false);
  const [formError, setFormError] = useState(false);

  const inputHandler = useCallback(
    (inputName, value, error) => {
      setloginInput((prevState) => {
        return {
          ...prevState,
          [inputName]: {
            value,
            error,
          },
        };
      });
    },
    [setloginInput]
  );

  useEffect(() => {
    if (loginInput && validate) {
      for (const property in loginInput) {
        if (loginInput[property]['error']) {
          setFormError(true);
          break;
        } else {
          setFormError(false);
        }
      }
    }
  }, [loginInput, validate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidate(true);
    if (!formError) {
      const username = loginInput['username'].value;
      const password = loginInput['password'].value;

      login(username, password);
    }
  };

  return (
    <section className='text-gray-600 body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Login
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='lg:w-1/2 md:w-2/3 mx-auto bg-gray-100 p-5 rounded-lg pb-6'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <TextInput
                    inputName='username'
                    placeholder='Username'
                    initialValue=''
                    validate={validate}
                    onInput={inputHandler}
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <PasswordInput
                    inputName='password'
                    placeholder='Password'
                    initialValue=''
                    validate={validate}
                    onInput={inputHandler}
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <input
                  type='submit'
                  className='w-full mx-auto text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-8 focus:outline-none rounded text-lg cursor-pointer'
                />
              </div>
              {authenticationError && (
                <span className='text-sm text-red-500'>
                  {authenticationError}
                </span>
              )}
              {formError && (
                <span className='text-sm text-red-500'>
                  Please correct the errors listed above
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
