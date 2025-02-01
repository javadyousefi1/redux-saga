import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from './counterSlice';

// Saga Worker: Runs when 'incrementBySaga' action is dispatched
function* handleIncrementSaga() {
  yield delay(1000); // Simulate an async operation
  yield put(increment()); // Dispatch 'increment' action
}

// Saga Watcher: Watches for 'incrementBySaga' action
function* watchIncrementSaga() {
  yield takeEvery('counter/incrementBySaga', handleIncrementSaga);
}

// Root saga
export default function* rootSaga() {
  yield watchIncrementSaga();
}
