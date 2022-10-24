import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from '@/theme/global.styles'

const root = document.getElementById('__app__') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
