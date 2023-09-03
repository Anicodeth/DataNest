import React from 'react';
import astronaut_running from '../../../assets/astronaut_running.mp4';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import useSignIn from '../../../services/hooks/useSignIn';

import AuthenticationPage from '../../components/authentication/authentication_page';
import Button from '../../components/authentication/button';
import InputField from '../../components/authentication/input_form';
import ErrorMessage from '../../components/authentication/error_message';

const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 charachters." }),
  password: z.string().min(6, { message: "Password must be at least 6 charachters." })
});

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const { isLoading, isSuccess, error, signIn } = useSignIn();
  const history = useNavigate();

  const handleSignin = (data) => {
    signIn(data);
  }

  if (isSuccess) {
    // route to the main page
    history('/chat');
  }

  return <AuthenticationPage illustration={astronaut_running} pageTitle={'signin'}>
    <>
      <h1 className="text-3xl font-semibold mb-10 text-[#4810d5]">Sign in to LimitlessAi.</h1>
      <form className="w-full max-w-md flex flex-col gap-4 mb-10" onSubmit={handleSubmit(handleSignin)}>

        <InputField
          label="Username"
          name="username"
          register={register}
          type="text"
          placeholder="e.g. starlord"
          disabled={isLoading}
          error={errors.username && errors.username.message}
        />
        <InputField
          label="Password"
          name="password"
          register={register}
          type="password"
          placeholder="Enter your password"
          disabled={isLoading}
          error={errors.password && errors.password.message}
        />
        <ErrorMessage message={error} />
        <Button isLoading={isLoading} type={"submit"}>
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
      <div>
        <p className="text-md text-violet-600">
          Don't have an account? <a onClick={()=>{
            history('/sign_up');
        }}  className='font-bold hover:underline cursor-pointer'>Sign Up!</a>
        </p>
      </div>
    </>
  </AuthenticationPage>
};

export default SignIn;
