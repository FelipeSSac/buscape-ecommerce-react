import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../store';

const renderWithRedux: FC = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: renderWithRedux, ...options });

export * from '@testing-library/react';
export { customRender as render };
