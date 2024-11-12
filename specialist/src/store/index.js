import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from './rootReducer';
import rootSaga from './saga';
import persistedReducer from './persistedReducer';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  persistedReducer(rootReducer),
  composeWithDevTools(
    applyMiddleware(sagaMiddleWare),
    // applyMiddleware(logger),
    // other store enhancers if any
  ),
);

const persistor = persistStore(store);

// Run the root saga.
sagaMiddleWare.run(rootSaga);

export { store, persistor };