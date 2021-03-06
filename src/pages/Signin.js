import React, { useState, useContext} from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../routes/routes';

export default function Signin(){
    
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    //initialize state values
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignin = e => {
        e.preventDefault();
        //call in firebase to handle authentication
        //if there's an error, populate the error state

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.ADMIN);
            })
            .catch(err => {
                setEmailAddress('');
                setPassword('');
                setError(err.message);
            });
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

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>

                        <Form.Text>
                            Not an Admin? <Form.Link to="/register">Register Now!</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}