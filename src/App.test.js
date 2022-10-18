import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// it('sets isLoading to true when loading', () => {
//   global.fetch = jest.fn().mockReturnValue(Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve({'user': 'test'})
//   }));

//   const c = shallow(<TestFetch />);
//   c.instance().handleClick().then(() => {
//     expect(c.instance().state.isLoading).toEqual(false);
//   });
//   expect(c.instance().state.isLoading).toEqual(true);
// });
