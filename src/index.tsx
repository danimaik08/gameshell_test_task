import './index.css';
import { createRoot } from 'react-dom/client';

import RootComponent from './RootComponent';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(<RootComponent />);
