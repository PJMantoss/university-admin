import styled from 'styled-components';
import { Link as MainRouterLink } from 'react-router-dom';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background: rgba(0,0,0,0.75);
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    margin: auto auto 100px auto;
    padding: 60px 68px 40px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
`;

export const Input = styled.input`
    background: #333;
    color: #fff;
    border: 0;
    border-radius: 4px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    padding: 5px 20px;

    &:last-of-type{
        margin-bottom: 30px;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`;

export const Text = styled.h1`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;

export const TextSmall = styled.h2` 
      font-size: 13px;
      color: #8c8c8c;
      line-height: normal;
      margin-top: 10px;
`;

export const Link = styled(MainRouterLink)`
    text-decoration: none;
    color: #fff;

    &:hover {
        text-decoration: underline;
    }
`;

export const Submit = styled.button`
    background: #000;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    margin: 0 0 12px;
    padding: 16px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;

export const Error = styled.div`
    background: #e87c03;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    margin: 0 0 16px;
    padding: 15px 20px;
`;