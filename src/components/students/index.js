import React, { useState, useContext, createContext } from 'react';
import { 
    Container, 
    Inner, 
    Body, 
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
    const [toggleShow, setToggleShow] = useState(false);

    return(
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
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

Students.Body = function StudentsBody({ children, ...restProps }){
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}