import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './AddProduct'; // Import AddProduct component
 import Signup from './Signup'; // Import SignUpUser component

ReactDOM.render(
  <React.StrictMode>
    <div>
      <AddProduct />
      <Signup />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);