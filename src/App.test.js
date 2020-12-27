import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Home, Signin } from './pages';

//Test Suite For Links
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
  } )
});

// describe("Register", () => {
//   test('"Please Sign In" link points to the right page', () => {
//     render(
//       <MemoryRouter>
//         <Register />
//       </MemoryRouter>
//     );

//     screen.debug();
//   } )
// })

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


//Test Suite For Forms
