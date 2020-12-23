import React, { useState, useContext, createContext } from 'react';
import { 
    Container, 
    Inner, 
    Body, 
    Title, 
    Item, 
    Frame, 
    Header 
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}