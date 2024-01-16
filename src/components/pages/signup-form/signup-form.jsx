'use client';

import clsx from 'clsx';
import { useState, useRef } from 'react';

import { getUserInput, validate } from 'components/pages/signup-form/helpers/form';
import Error from 'components/shared/error/error';
import Input from 'components/shared/input/input';
import Label from 'components/shared/label/label';
import { robotoLight } from 'styles/fonts/fonts';

import sendDataWithDelay from './network';
import SignupButton from './signup-button';

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const apiCallTimeout = useRef(null);

  const status =
    (loading && 'loading') || (error && 'error') || (success && 'success') || 'default';

  const doSignup = async (email) => {
    try {
      setLoading(true);
      clearTimeout(apiCallTimeout.current);
      apiCallTimeout.current = await sendDataWithDelay(email, 1000);
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { email } = getUserInput(e);

    const validationError = validate(email);

    if (validationError) {
      setError(validationError);
      return;
    }

    await doSignup(email);
  };

  const resetForm = () => {
    setError('');
    setSuccess(false);
  };

  return (
    <div className="mt-10 max-w-[31.5rem]">
      <form
        action="/"
        className="px-space-4xs py-space-4xs border border-[rgb(var(--primary-1)/.15)] border-solid rounded-md bg-dark-gradient"
        method="POST"
        noValidate
        onSubmit={handleSignup}
      >
        <div className="flex">
          <Label id="email" className="sr-only" value="Email" />
          <Input
            className={clsx(
              `m-0 py-4 px-7 border-none rounded-sm text-grey-90 text-base ${robotoLight.className} leading-4.5 tracking-medium`,
              error
                ? 'placeholder:bg-grey-90 opacity-80'
                : 'placeholder:bg-light-gradient bg-clip-text opacity-100'
            )}
            type="email"
            name="email"
            id="email"
            autoCapitalize="none"
            autoCorrect="off"
            autoComplete="off"
            placeholder={error ? 'Oops! Something went wrong' : 'Your business email...'}
            readOnly={loading}
            aria-invalid={!!error}
            onChange={resetForm}
          />
          <SignupButton status={status} />
        </div>
      </form>
      {error ? <Error message={error} /> : null}
    </div>
  );
};

export default SignupForm;
