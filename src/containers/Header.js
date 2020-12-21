import React from 'react';
import Header from '../components/header';

export function HeaderContainer({ children }){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo></Header.Logo>
                <Header.ButtonLink></Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}