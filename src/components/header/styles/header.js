import styled from 'styled-components';
import { Link as MainRouterLink } from 'react-router-dom'

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/${src}.jpg` :
    '../images/home-bg.jpg')}) top left / cover no-repeat;
    
    @media(max-width: 1100px){
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none`}
    }
`;