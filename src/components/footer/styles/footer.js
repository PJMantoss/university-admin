import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    width: 100%;
    flex-direction: column;
    padding: 70px 56px;
    margin: auto;

    @media(max-width: 900px){
        padding: 60px 30px;
        margin: 0 20px;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;

    @media(max-width: 900px){
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Link = styled.a`
    color: #757575;
    font-size: 13px;
    margin-bottom: 20px;
    text-decoration: none;
`;

export const Title = styled.p`
    color: #757575;
    font-size: 16px;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    color: #757575;
    font-size: 13px;
    margin-bottom: 20px;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;