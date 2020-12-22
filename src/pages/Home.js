import React from 'react';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Feature } from '../components';

export default function Home(){
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Welcome To Admin University</Feature.Title>
                    <Feature.SubTitle>Manage Students Courses</Feature.SubTitle>
                </Feature>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}