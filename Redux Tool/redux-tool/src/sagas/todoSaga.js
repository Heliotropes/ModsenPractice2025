import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_TODOS_REQUEST,
  fetchTodosSuccess,
  fetchTodosFailure,
} from '../actions/todoActions';

const fetchTodos = () =>
  axios.get('https://jsonplaceholder.typicode.com/todos');

function* fetchTodosSaga() {
  try {
    const response = yield call(fetchTodos);
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* watchFetchTodos() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodosSaga);
}

export default watchFetchTodos;