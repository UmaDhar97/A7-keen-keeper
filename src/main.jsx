import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Make sure Tailwind is imported here!
import { BrowserRouter } from 'react-router-dom'
import { TimelineProvider } from './context/TimelineContext'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TimelineProvider>
        <Toaster position="top-center" />
        <App />
      </TimelineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)