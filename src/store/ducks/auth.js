import { createActions, createReducer } from 'reduxsauce'

/*
 * Creating action types & creators
 * */
export const { Types, Creators } = createActions({
  login: ['username', 'password'],
  loginSuccess: ['user'],
  loginError: ['error'],
  logout: []
})

/*
 * Creating Initial state and Redux handlers
 * */
const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  error: null,
  user: {}
}

const login = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: INITIAL_STATE.error
})

const loginSuccess = (state = INITIAL_STATE, { user }) => ({
  ...state,
  authenticated: true,
  loading: false,
  user
})

const loginError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  loading: false,
  error
})

const logout = () => ({ ...INITIAL_STATE })

/*
 * Creating reducer
 * */
export default createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_ERROR]: loginError,
  [Types.LOGOUT]: logout
})
