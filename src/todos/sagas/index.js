import { put, fork } from 'redux-saga/effects';
import { fetchAllAsync } from '../actions';
import { watchAddTodo } from './addTodo';
import { watchFetchTodos } from './fetchTodos';
import { watchClearCompleted } from './clearCompletedTodos';
import { watchCompleteAll } from './completeAllTodos';
import { watchUpdateTodo } from './updateTodo';
import { watchToggleCompleted } from './completeTodo';
import { watchDeleteTodo } from './deleteTodo';

function* startup() {
  yield put(fetchAllAsync.request({}));
}

export default function* todoRootSaga() {
  yield* [
    fork(watchToggleCompleted),
    fork(watchDeleteTodo),
    fork(watchAddTodo),
    fork(watchCompleteAll),
    fork(watchFetchTodos),
    fork(watchUpdateTodo),
    fork(watchClearCompleted),
    fork(startup),
  ];
}
