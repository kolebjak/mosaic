import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import previewReducer from './modules/preview/reducer';
import galleryReducer from './modules/gallery/reducer';

// tslint:disable-next-line
declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  previewReducer,
  galleryReducer,
});
export default (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
  const router = routerMiddleware(history);
  return {
    ...createStore(
      rootReducer(history),
      composeEnhancers(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(router),
      )),
    runSaga: sagaMiddleware.run,
  };
};
