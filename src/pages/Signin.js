import React, { useState} from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import * as ROUTES from '../constants/routes';

export default function Signin(){

    //initialize state values
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignin = e => {
        e.preventDefault();
        //call in firebase to handle authentication
    }

    //form validation
    const isInvalid = password === '' | emailAddress === '';

    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            type="email" 
                            onChange={({ target }) => setEmailAddress(target.value)} 
                            value={emailAddress} 
                            placeholder="Email" 
                        />

                        <Form.Input
                            type="password" 
                            onChange={({ target }) => setPassword(target.value)} 
                            value={password} 
                            autocomplete="off"
                            placeholder="Password" 
                        />
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}