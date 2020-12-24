import React from 'react';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Feature } from '../components';

export default function Home(){
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Welcome Admin</Feature.Title>
                    <Feature.SubTitle>Sign In To View Students' List</Feature.SubTitle>
                </Feature>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}