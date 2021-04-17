import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TextInput from '../components/ui/TextInput';
import PasswordInput from '../components/ui/PasswordInput';
import AuthenticationContext from '../context/authentication/authenticationContext';

const Login = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const {
    isAuthenticated,
    authenticationError,
    isLoading,
    startLoadingContent,
    login,
  } = authenticationContext;

  const [loginInput, setloginInput] = useState(null);
  const [validate, setValidate] = useState(false);
  const [formError, setFormError] = useState(false);

  const history = useHistory();

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

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/lists');
    }
  }, [isAuthenticated, history]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidate(true);
    if (!formError) {
      const username = loginInput['username'].value;
      const password = loginInput['password'].value;

      startLoadingContent();

      try {
        await login(username, password);
      } catch (error) {
        // error with login
      }
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
                <button
                  type='submit'
                  className='w-full inline-flex justify-center items-center mx-auto text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-8 focus:outline-none rounded text-lg cursor-pointer'
                >
                  {isLoading && (
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  )}
                  Login
                </button>
              </div>
              {authenticationError && (
                <span
                  className='text-sm text-red-500'
                  dangerouslySetInnerHTML={{
                    __html: authenticationError,
                  }}
                />
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
