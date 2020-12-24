import React, { useContext, createContext } from 'react';
import { 
    Container, 
    Inner, 
    Title, 
    Item, 
    Frame, 
    Header 
} from './styles/students';

const ToggleContext = createContext();

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
    const {toggleShow, setToggleShow} = useContext(ToggleContext);

    return(
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
           {children}
           {toggleShow ? (
               <img src="./images/icons/close-slim.png" alt="close" />
           ) : (
               <img src="./images/icons/add.png" alt="open" />
           )}
        </Header>
    )
}