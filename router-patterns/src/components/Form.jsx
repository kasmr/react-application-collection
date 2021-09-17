import React from 'react';
import useFormState from '../hooks/useFormState';

const Form = () => {
  const [email, handleEmailChange, resetEmail] = useFormState('');
  const [password, handlePasswordChange, resetPassword] = useFormState('');

  return (
    <div>
      <h1>
        The email: {email} and password: {password}
      </h1>
      <input type='text' value={email} onChange={handleEmailChange} />
      <input type='text' value={password} onChange={handlePasswordChange} />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
};

export default Form;
