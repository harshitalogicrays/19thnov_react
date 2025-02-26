import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Routing from './features/Routing.jsx'
import { Provider } from 'react-redux'
import mystore from './redux/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={mystore}>
<BrowserRouter>
    <Routing/>
</BrowserRouter></Provider>,
)
