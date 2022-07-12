import React from 'react'
import { Sum } from './sum';
import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sum numeri= {{a:5, b:6}}/>, root);