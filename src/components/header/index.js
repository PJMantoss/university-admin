import React from 'react';
import { Link as MainRouterLink} from 'react-router-dom';
import { 
    Background, 
    Container, 
    Group, 
    Logo,
    ButtonLink,
    Link, 
    Text, 
    Profile,
    Feature 
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

Header.Logo = function HeaderLogo({ to, ...restProps }){
    return(
        <MainRouterLink to={to}>
            <Logo {...restProps} />
        </MainRouterLink>
    )
};

Header.Feature = function HeaderFeature({ children, ...restProps }){
    return <Feature {...restProps}>{children}</Feature>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
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