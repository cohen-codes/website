import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Website } from './app.js';

const root = document!.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <BrowserRouter>
    <Website />
  </BrowserRouter>
);
