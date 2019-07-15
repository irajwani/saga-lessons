import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import RootScreen from './Containers/Root';
import createStore from './Stores';

const { store, persistor } = createStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>

  );
}

export default App;
