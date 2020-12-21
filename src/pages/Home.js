import React from 'react';
import { HeaderContainer } from '../containers/Header';
import { Feature } from '../components';

export default function Home(){
    return(
        <HeaderContainer>
            <Feature>
                <Feature.Title>Welcome To Admin University</Feature.Title>
                <Feature.SubTitle>Manage Student Records</Feature.SubTitle>
            </Feature>
        </HeaderContainer>
    )
}