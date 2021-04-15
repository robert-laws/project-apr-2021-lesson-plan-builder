import React, { useState, useEffect, useCallback } from 'react';
import TextInput from '../components/ui/TextInput';

const Login = ({ authenticationError }) => {
  const [loginInput, setloginInput] = useState(null);
  const [formError, setFormError] = useState(true);

  const inputHandler = useCallback(
    (inputName, value) => {
      setloginInput((prevState) => {
        return {
          ...prevState,
          [inputName]: value,
        };
      });
    },
    [setloginInput]
  );

  // useEffect(() => {
  //   if (loginInput) {
  //     for (const property in loginInput) {
  //       if (loginInput[property] === '') {
  //         console.log('error');
  //         setFormError(true);
  //         break;
  //       } else {
  //         console.log('no error');
  //         setFormError(false);
  //       }
  //     }
  //   }
  // }, [loginInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
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
          <div className='lg:w-1/2 md:w-2/3 mx-auto bg-gray-100 p-5 rounded-lg'>
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
                  <TextInput
                    inputName='password'
                    placeholder='Password'
                    initialValue=''
                    onInput={inputHandler}
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <button
                  type='submit'
                  className='w-full mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                  disabled={formError}
                >
                  Login
                </button>
              </div>
              {authenticationError && (
                <span className='text-xs text-red-500 ml-2'>
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
