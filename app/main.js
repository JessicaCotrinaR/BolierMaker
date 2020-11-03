import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import '../public/index.js'

ReactDOM.render(
  <Provider store={store}>
     <div>Hello, world!</div>
  </Provider>,
  document.getElementById('main') // make sure this is the same as the id of the div in your index.html
);

//Use the connect function from react-redux to obtain slices 
//of state and the dispatch method throughout your app 