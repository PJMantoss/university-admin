import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import { Home, Register } from './pages';

//Test Suite For Links
describe("Home", () => {
  test('"Sign In" link points to the right page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    screen.debug();
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
