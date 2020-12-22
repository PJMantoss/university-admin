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
    
    return()
}