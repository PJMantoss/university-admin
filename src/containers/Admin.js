import React, { useContext } from 'react';
import { Header } from '../components';
import { StudentsContainer } from './Students';
import { FooterContainer } from './Footer';
import * as ROUTES from '../routes/routes';

export function AdminContainer(){
    return(
        <>
            <Header>
                <Header.Group>
                    <Header.Logo to={ROUTES.ADMIN} src="./images/logo.svg" alt="Admin" />
                </Header.Group>
            </Header>
            <StudentsContainer />
            <FooterContainer />
        </>
    );
}