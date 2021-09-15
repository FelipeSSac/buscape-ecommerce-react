import { render, fireEvent, cleanup } from '../../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { ShopList } from '../../Organism/ShopList';
import { CartList } from '.';

afterEach(cleanup);

it('should have 1 items in the cart list', () => {
  const { getAllByText } = render(<ShopList />);
  const { getByTestId } = render(<CartList />);

  const button = getAllByText('Adicionar ao carrinho')[0];
  const list = getByTestId('cart-list-container');

  fireEvent.click(button);

  expect(list).toHaveTextContent('Quantidade: 1');
});

it('should have 3 item in the cart list', () => {
  const { getAllByText } = render(<ShopList />);
  const { getByTestId } = render(<CartList />);

  const button = getAllByText('Adicionar ao carrinho')[0];
  const list = getByTestId('cart-list-container');

  fireEvent.click(button);
  fireEvent.click(button);

  expect(list).toHaveTextContent('Quantidade: 3');
});

it('should have 6 item in the cart list', () => {
  const { getAllByText } = render(<ShopList />);
  const { getByTestId } = render(<CartList />);

  const button = getAllByText('Adicionar ao carrinho')[1];
  const list = getByTestId('cart-list-container');

  fireEvent.click(button);
  fireEvent.click(button);

  expect(list).toHaveTextContent('Quantidade: 3');
  expect(list).toHaveTextContent('Quantidade: 3');
});

it('should exclude all items in the cart list', () => {
  const { getByTestId, getAllByTestId } = render(<CartList />);

  const firstButton = getAllByTestId('cart-item__exclude-button')[0];
  const secondButton = getAllByTestId('cart-item__exclude-button')[1];
  const list = getByTestId('cart-list-container');

  fireEvent.click(firstButton);
  fireEvent.click(firstButton);
  fireEvent.click(firstButton);

  fireEvent.click(secondButton);
  fireEvent.click(secondButton);
  fireEvent.click(secondButton);

  expect(list).toHaveTextContent('Seu carrinho ainda está vazio');
});
