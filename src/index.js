import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './firebase/Config'
import { FirebaseContext } from './store/FirebaseContext';
import Context from './store/FirebaseContext';



ReactDOM.render(
  // Provider means provider of FirebaseContext and the value is value get fromfirebase object(firbase/config)
  <FirebaseContext.Provider value={{firebase}}> 
  <Context>
        <App/>
  </Context>
           
  </FirebaseContext.Provider>,
   document.getElementById('root')
 
);


