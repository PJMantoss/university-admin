import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 70px 56px;
    margin: auto;

    @media(max-width: 600px){
        padding: 60px 30px;
    }
`;