import { Provider } from 'react-redux';
import { store } from '../../../store';

import { Layout } from '../Layout';

import GlobalStyles from '../../../assets/styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout />
    </Provider>
  );
}
