import React, { useState } from 'react';
import astronaut_achieving from '../../../assets/astronaut_achieving.mp4';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import useSignUp from '../../../services/hooks/useSignUp';
import useSignIn from '../../../services/hooks/useSignIn';

import AuthenticationPage from '../../components/authentication/authentication_page';
import InputField from '../../components/authentication/input_form';
import Button from '../../components/authentication/button';
import ErrorMessage from '../../components/authentication/error_message';
import SuccessMessage from '../../components/authentication/success_message';

const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 charachters." }),
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Email must be a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 charachters." })
});

const SignUp = () => {
  const [signInTried, setSignInTried] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const { user, isLoading, isSuccess, error, signUp } = useSignUp();
  const { isLoading: signInLoading, isSuccess: signInIsSuccess, error: signInError, signIn } = useSignIn();

  const handleSignup = (data) => {
    signUp(data);
  }

  if (isSuccess & !signInTried) {
    setSignInTried(true);
    signIn(user.username, user.password);
  }

  if (signInIsSuccess) {
    // route to the user page
  }

  return (
    <AuthenticationPage illustration={astronaut_achieving} pageTitle={'Signup'}>
      <>
        <h1 className="text-3xl font-semibold mb-10 text-violet-600">Create an Account with us.</h1>
        <form className="w-full max-w-md flex flex-col gap-4 mb-10" onSubmit={handleSubmit(handleSignup)}>
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
            label="Email"
            name="email"
            register={register}
            type="text"
            placeholder="e.g. starlord@guardians.com"
            disabled={isLoading}
            error={errors.email && errors.email.message}
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
          <ErrorMessage message={signInError ? "Sign up was successful, but we couldn't log you in. You can manually log in." : ""} />
          <SuccessMessage message={isSuccess ? "Sign Up was successful, now signing you in." : ""} />

          <Button type={'submit'} isLoading={isLoading}>{isLoading ? "Signing Up..." : signInLoading ? "Signing you in..." : "Sign Up"}</Button>
        </form>
        <div>
          <p className="text-md text-violet-600">
            Already have an account? <a href='#' className='font-bold hover:underline'>Sign In!</a>
          </p>
        </div>
      </>
    </AuthenticationPage>
  );
};

export default SignUp;

