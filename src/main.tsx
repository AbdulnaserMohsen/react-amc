
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove any imports of vanilla JS files that were being used
// Import CSS directly in React components as needed
import './styles/main.css'

createRoot(document.getElementById("root")!).render(<App />);
