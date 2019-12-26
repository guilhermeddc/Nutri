import {
  takeLatest, put
} from 'redux-saga/effects'
import { Types } from '../../ducks/auth'

function* login({ username, password }) {
  try {

    // faz o request
    // const response = yield call()

    const user = {
      username,
      password
    }

    yield put({
      type: Types.LOGIN_SUCCESS,
      user
    })
  } catch (e) {
    yield put({
      type: Types.LOGIN_ERROR,
      error: e.toString()
    })

    window.snackbar.error(e.toString())
  }
}

export default [takeLatest(Types.LOGIN, login)]
