import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';

import './sign-in.styles.scss';

const SignInPage = () => (
  <div className="sign-in-up">
    <SignIn />
    <Signup />
  </div>
);

export default SignInPage;