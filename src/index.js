import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import { NetflixRegisterComponent } from './components/NetflixRegisterComponent';
import NetflixIndexComponent from './components/NetflixIndexComponent';
import reportWebVitals from './reportWebVitals';
import DataBindingComponent from './components/DataBindingComponent';
import ShoppingComponent from './components/ShoopingComponent';
import EventBindingComponent from './components/EventBindingComponent';
import TwoWayBinding from './components/TwoWayBinding';
import ShoppingClassComponentDemo from './components/ShoppingClassComponentDemo';
import FormComponent from './components/FormComponent';
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/FormikValidation';
import YupValidation from './components/YupValidation';
import YupValidationComponent from './components/YupValidationComponent';
import LifeCycleDemo from './components/LifeCycleDemo';
import ReactHookDemo from './components/ReactHookDemo';
import UserLogin from './components/UserLogin';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider >
      <UserLogin />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
