import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { Logout } from '@/components/Logout';

const Login = () => {
  // Replace this with your actual client ID
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
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
          clientId={CLIENT_ID}
          buttonText='Login with Google'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'} // Use the appropriate policy for your application
          className='mt-4 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'
        />
        <Logout />
      </div>
    </div>
  );
};

export default Login;

