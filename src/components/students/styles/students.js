import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 1100px;
    width: 80%;
    margin: auto;
`;

export const Frame = styled.div`
    max-width: 1200px;
    margin-bottom: 10px;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin: 0 0 8px 0;
    color: white;
    text-align: center;

    @media (max-width: 900px){
        font-size: 35px;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;
    text-decoration: none;

    @media(max-width: 800px){
        font-size: 16px;
    }
    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media(max-width: 600px){
            width: 16px;
        }
    }
`;