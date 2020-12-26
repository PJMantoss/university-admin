import React from 'react';
import { 
    Container, 
    Inner, 
    Title, 
    Item, 
    Frame, 
    Header 
} from './styles/students';

export default function Students({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}


Students.Frame = function StudentsFrame({ children, ...restProps }){
    return <Frame {...restProps}>{children}</Frame>
}

Students.Item = function StudentsItem({ children, ...restProps }){

    return <Item {...restProps}>{children}</Item>
}

Students.Title = function StudentsTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Students.Header = function StudentsHeader({ children, ...restProps }){

    return(
        <Header {...restProps}>
           {children}
        </Header>
    )
}