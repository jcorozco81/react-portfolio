import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.min.css'
import {
  GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3';


require('dotenv').config()

const site_key = process.env.REACT_APP_SITE_KEY;




ReactDOM.render(







  
  <React.StrictMode>

<GoogleReCaptchaProvider
    reCaptchaKey="6LehUfggAAAAAL94ibQ6ikhOLBphTvphzvZfUAyP"
    // language="[optional_language]"
    // useRecaptchaNet="[optional_boolean_value]"
    // useEnterprise="[optional_boolean_value]"
    // scriptProps={{
    //   async: false, // optional, default to false,
    //   defer: false, // optional, default to false
    //   appendTo: 'head', // optional, default to "head", can be "head" or "body",
    //   nonce: undefined // optional, default undefined
    // }}
    container={{ // optional to render inside custom element
      // element: "[required_id_or_htmlelement]",
      parameters: {
        // badge: '[inline|bottomright|bottomleft]', // optional, default undefined
        theme: 'dark', // optional, default undefined
      }
    }}
  >




    <App />


    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
