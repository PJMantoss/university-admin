import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Home, Signin } from './pages';

//Test Suite For 'Sign In' Link
describe("Home", () => {
  test('"Sign In" link points to the right page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    
    const link = screen.getByRole('link', {name: /Sign In/i});
    //screen.debug(link);
    userEvent.click(link);

    expect(screen.getByRole('heading', { name: /Sign In/i })).toBeInTheDocument();
  } );

});

//Test Suite For Form
describe('Sign In', () => {
  test('submits login information', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  
    const emailInput = screen.getByText('Email');
    userEvent.type(emailInput, 'reactjs');
  
    const passwordInput = screen.getByText('Password');
    userEvent.type(passwordInput, 'reactjs');
  
    const signinButton = screen.getByRole('button', {name: /Sign In/i});
    
    userEvent.click(signinButton);
    
    screen.debug();
  });
})