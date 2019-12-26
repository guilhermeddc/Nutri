export const selectUsername = store => store.auth.user.username

export const selectUserPassword = store => store.auth.user.password

export const selectIsAuthenticated = store => store.auth.authenticated