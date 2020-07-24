import React from 'react';
import './App.css';
import HomoComponent from './components/HomeCompo';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="container my-3">
        <HomoComponent />
      </div>
    </Provider>
  );
}

export default App;
