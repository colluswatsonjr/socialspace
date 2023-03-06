import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const SignInSignUp = () => {
    
    const [isLoginForm, setIsLoginForm] = useState(true);

    const switchForm = () => { setIsLoginForm(!isLoginForm); };

    return (
        <div className="sign-in-sign-up">
            {isLoginForm ? <LoginForm switchForm={switchForm} /> : <SignupForm switchForm={switchForm} />}
        </div>
    );
};

export default SignInSignUp;