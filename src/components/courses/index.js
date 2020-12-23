import React from 'react';
import { 
    Container
} from './styles/courses';

export default function Courses({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}