import React from 'react'
import { createRoot } from 'react-dom/client'
import Web from './Web.jsx'
import { HashRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Web />
    </HashRouter>
  </React.StrictMode>,
)
