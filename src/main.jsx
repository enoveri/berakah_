import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/base.css'
import './styles/components.css'
import './styles/themes.css'
import './styles/containers.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import { HashRouter } from 'react-router-dom'

// Function to initialize the app
function initApp() {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error('Root element not found!');
    return;
  }

  try {
    createRoot(rootElement).render(
      <StrictMode>
        <HashRouter>
          <AppProvider>
            <App />
          </AppProvider>
        </HashRouter>
      </StrictMode>
    );
    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Initialize the app
initApp();
