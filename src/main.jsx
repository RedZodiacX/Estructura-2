import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FirstApp from './FirstApp'
import ComponentApp from './ComponentApp'
import { GiftExpertApp } from './GiftExpertApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp value={0} /> 
    <GiftExpertApp />
    </React.StrictMode>
)