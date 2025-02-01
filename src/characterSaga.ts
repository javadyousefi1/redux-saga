import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from './redux/characterSlice';

// API call function
const fetchCharactersFromAPI = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  return response.data.results; // Extract characters
};

// Saga Worker: Handles API Call
function* fetchCharactersSaga() {
  try {
    const characters = yield call(fetchCharactersFromAPI);
    yield put(fetchCharactersSuccess(characters)); // Dispatch success action
  } catch (error) {
    yield put(fetchCharactersFailure(error.message)); // Dispatch failure action
  }
}

// Saga Watcher: Watches for fetchCharactersRequest action
export function* watchCharacterSaga() {
  yield takeLatest(fetchCharactersRequest.type, fetchCharactersSaga);
}
