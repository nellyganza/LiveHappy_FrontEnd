import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/main.css";
import "./styles/develop.css";
import 'react-slideshow-image/dist/styles.css'
import { Provider} from 'react-redux';
import store from './redux/store'
import axiosConfig from './config/axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
library.add(fab);

axiosConfig();
ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>
  ,
  document.querySelector("#root")
)

