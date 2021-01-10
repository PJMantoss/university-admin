import styled from 'styled-components';
import { Link as MainRouterLink } from 'react-router-dom'

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? process.env.PUBLIC_URL + `/images/${src}.jpg` :
    process.env.PUBLIC_URL + '/images/home-bg.jpg')}) top left / cover no-repeat;

    /*Only show background images screens larger than 1100px*/
    @media(max-width: 900px){
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none`}
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;
    
    a {
        display: flex;
    }
    
    @media (max-width: 1000px){
        margin: 0 30px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover{
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const ButtonLink = styled(MainRouterLink)`
    display: block;
    background: #000;
    color: white;
    width: 84px;
    height: fit-content;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background: #f40612;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media(min-width: 1449px){
        height: 45px;
        width: 167px;
    }

    @media(max-width: 900px){
        margin-left: 20px
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.p`
    font-size: 22px;
    line-height: normal;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }
`;