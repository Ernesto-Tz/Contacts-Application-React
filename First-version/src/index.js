import ReactDOM from 'react-dom/client';

import App from './App';
// Good practice if you create a folder for your general custom css and use scss instead of plain css. Just 'npm i sass' and you can go with it
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
