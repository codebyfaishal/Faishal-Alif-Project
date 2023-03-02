/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// membuat saga middleware pada variable sagaMiddleware kemudian saat membuat store tidak hanya reducer yang dimasukkan sebagai parameter, namun juga middleware dengan menggunakan komponen applyMiddleware dengan parameter middleware yang tadi sudah dibuat.
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));




const FaishalAlifProject = () => (
    <Provider store={store}>
    <App />
  </Provider>
);

//yang melakukan pemanggilan data saga yang telah dibuat pada folder saga sehingga bisa menghubungkan semua kondisi.
sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent('FaishalAlifProject', () => FaishalAlifProject);
