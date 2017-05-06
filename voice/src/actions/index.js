export const USER_LOGGEDIN = 'FETCH_POSTS';

export function userLoggedIn(user) {
    console.log("HEY IM CALLED");
    return {
        type: USER_LOGGEDIN,
        payload: user
    };
}
