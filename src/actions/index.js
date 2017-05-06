export const USER_LOGGEDIN = 'FETCH_POSTS';
export const TOKEN_OBTAINED = 'TOKEN_OBTAINED';

export function userLoggedIn(user) {
    return {
        type: USER_LOGGEDIN,
        payload: user
    };
}

export function tokenObtained(token) {
  return {
    type: TOKEN_OBTAINED,
    payload: token
  };
}
