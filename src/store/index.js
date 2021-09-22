import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import reducer from './reducer';

//-----------------------|| REDUX - MAIN STORE ||-----------------------//

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, composeEnhancers());

const persister = persistStore(store);

export { store, persister };
