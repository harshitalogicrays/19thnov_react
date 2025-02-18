import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Routing from './features/Routing.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routing/>
</BrowserRouter>,
)
