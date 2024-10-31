import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const Login = () => {
  // Replace this with your actual client ID
  const CLIENT_ID = process.env.VITE_GOOGLE_CLIENT_ID;

  // Initialize the Google API client
  useEffect(() => {
    const start = () => {
      gapi.load('client:auth2', () => {
        gapi.auth2.init({
          client_id: CLIENT_ID,
        });
      });
    };

    gapi.load('client:auth2', start);
  }, [CLIENT_ID]);

  // Handle successful login
  const onSuccess = (response: any) => {
    console.log('Login Success: currentUser:', response.profileObj);
  };

  // Handle failed login
  const onFailure = (response: any) => {
    console.error('Login failed: res:', response);
  };

  return (
    <div className='h-screen flex items-center w-full justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl mb-4'>Welcome to My App</h1>
        <GoogleLogin
          className='rounded-md bg-red-200'
          clientId={CLIENT_ID}
          buttonText='Login with Google'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'} // Use the appropriate policy for your application
        />
      </div>
    </div>
  );
};

export default Login;

