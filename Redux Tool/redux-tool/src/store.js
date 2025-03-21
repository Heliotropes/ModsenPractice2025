import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducers/todoReducer';
import watchFetchTodos from './sagas/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchTodos);

export default store;