import { render, fireEvent, cleanup } from '../../../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { ShopList } from '../../Organism/ShopList';
import { BurgerIcon } from '.';

afterEach(cleanup);

it('should add 1 item to cart and counter be equal to 1', () => {
  const { getAllByText } = render(<ShopList />);
  const { getByTestId } = render(<BurgerIcon />);

  const button = getAllByText('Adicionar ao carrinho')[0];
  const counter = getByTestId('burger-icon__cart-counter');

  fireEvent.click(button);

  expect(counter).toHaveTextContent('1');
});

it('should add 2 same items to cart and counter be equal to 1', () => {
  const { getAllByText } = render(<ShopList />);
  const { getByTestId } = render(<BurgerIcon />);

  const button = getAllByText('Adicionar ao carrinho')[0];
  const counter = getByTestId('burger-icon__cart-counter');

  fireEvent.click(button);
  fireEvent.click(button);

  expect(counter).toHaveTextContent('1');
});

it('should add 2 different items to cart and counter be equal to 2', () => {
  const { getAllByText } = render(<ShopList />);
  const { getByTestId } = render(<BurgerIcon />);

  const firstButton = getAllByText('Adicionar ao carrinho')[0];
  const secondButton = getAllByText('Adicionar ao carrinho')[1];
  const counter = getByTestId('burger-icon__cart-counter');

  fireEvent.click(firstButton);
  fireEvent.click(secondButton);

  expect(counter).toHaveTextContent('2');
});

it('should add 2 same items and 1 different item to cart and counter be equal to 2', () => {
  const { getAllByText } = render(<ShopList />);
  const { getByTestId } = render(<BurgerIcon />);

  const firstButton = getAllByText('Adicionar ao carrinho')[0];
  const secondButton = getAllByText('Adicionar ao carrinho')[1];
  const counter = getByTestId('burger-icon__cart-counter');

  fireEvent.dblClick(firstButton);
  fireEvent.click(secondButton);

  expect(counter).toHaveTextContent('2');
});

it('should add 4 items from 2 kinds to cart and counter be equal to 2', () => {
  const { getAllByText } = render(<ShopList />);
  const { getByTestId } = render(<BurgerIcon />);

  const firstButton = getAllByText('Adicionar ao carrinho')[0];
  const secondButton = getAllByText('Adicionar ao carrinho')[1];
  const counter = getByTestId('burger-icon__cart-counter');

  fireEvent.dblClick(firstButton);
  fireEvent.dblClick(secondButton);

  expect(counter).toHaveTextContent('2');
});
