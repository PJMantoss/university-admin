import React from 'react';
import { 
    Background, 
    Container, 
    Group, 
    Link, 
    Text, 
    Profile 
} from './styles/header';

export default function Header({ bg=true, children, ...restProps }){
    return <Background {...restProps}>{children}</Background>
}

Header.Frame = function HeaderFrame({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }){
    return <Group {...restProps}>{children}</Group>
}

Header.Link = function HeaderLink({ children, ...restProps }){
    return <Link {...restProps}>{children}</Link>
}

Header.Text = function HeaderText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

Header.Profile = function HeaderProfile({ children, ...restProps }){
    return <Profile {...restProps}>{children}</Profile>
}