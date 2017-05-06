import { USER_LOGGEDIN } from '../actions/index';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_LOGGEDIN:
            return action.payload;
        default:
            return state;
    }
}
