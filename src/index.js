import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/App';
import { DarkModeProvider } from './middleware/context/dark-mode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);

