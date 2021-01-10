import React from 'react';
import Header from '../components/header';
import * as ROUTES from '../routes/routes';

export function HeaderContainer({ children }){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Admin Uni"  />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}