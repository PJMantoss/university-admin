import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 70px 56px;
    margin: auto;

    @media(max-width: 900px){
        padding: 60px 30px;
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