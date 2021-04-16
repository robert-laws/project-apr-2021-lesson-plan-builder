import React, { useState, useEffect, useCallback } from 'react';
import TextInput from '../components/ui/TextInput';
import PasswordInput from '../components/ui/PasswordInput';

const Login = ({ authenticationError }) => {
  const [loginInput, setloginInput] = useState(null);
  const [formError, setFormError] = useState(true);

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
    if (loginInput) {
      let anyError = true;
      for (const property in loginInput) {
        console.log(loginInput[property]['error']);
        if (loginInput[property]['error']) {
          setFormError(true);
          anyError = true;
          break;
        } else {
          anyError = false;
        }
      }
      if (!anyError) {
        setFormError(false);
      }
    }
  }, [loginInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginInput.username.value);
    console.log(loginInput.password.value);
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
                    onInput={inputHandler}
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <input
                  type='submit'
                  className='w-full mx-auto text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-8 focus:outline-none rounded text-lg disabled:opacity-50 cursor-pointer disabled:cursor-default disabled:bg-gray-400'
                  disabled={formError}
                />
              </div>
              {authenticationError && (
                <span className='text-sm text-red-500'>
                  {authenticationError}
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
