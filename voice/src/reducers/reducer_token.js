import { TOKEN_OBTAINED } from '../actions/index';

const INITIAL_STATE = "";

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOKEN_OBTAINED:
            return action.payload;
        default:
            return state;
    }
}
