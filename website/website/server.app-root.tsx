import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { Website } from './app.js';

interface IRenderProps {
  path: string;
}

export const render = async ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Website />
    </StaticRouter>
  );
};
