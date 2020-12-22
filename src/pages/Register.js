import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
// import * as ROUTES from '../constants/routes';
// import { useHistory } from 'react-router-dom';

export default function Register(){

    //initialize states
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //form validation
    const isInvalid = firstName === '' | emailAddress === '' | password === '';

    //Event handler
    const handleSignup = (e) => {
        e.preventDefault();

        //call in firebase to handle registration/authentication
    }

    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Register</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                        type="text" 
                        onChange={({ target }) => setFirstName(target.value)} 
                        value={firstName} 
                        placeholder="First Name" 
                    />

                    <Form.Input
                        type="email" 
                        onChange={({ target }) => setEmailAddress(target.value)} 
                        value={emailAddress} 
                        placeholder="E-mail Address" 
                    />

                    <Form.Input
                        type="password" 
                        onChange={({ target }) => setPassword(target.value)} 
                        value={password} 
                        autocomplete="off"
                        placeholder="Password" 
                    />

                    <Form.Submit disabled={isInvalid} type="submit">
                        Register
                    </Form.Submit>

                    <Form.Text>
                        Already an Admin? <Form.Link to="/signin">Please Sign In</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}