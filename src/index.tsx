import { Provider as StoreProvider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from 'src/store';
import { App } from 'src/components/App';
import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
);
