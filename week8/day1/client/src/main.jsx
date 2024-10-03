import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoReducerProvider } from './context/TodoReducerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoReducerProvider>
      <App />
    </TodoReducerProvider>
  </StrictMode>,
)
