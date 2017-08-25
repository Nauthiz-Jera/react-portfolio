import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/state/configure-store';
import AppContainer from './app/modules/app-container/app-container';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
