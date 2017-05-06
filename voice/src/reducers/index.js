import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import TokenReducer from './reducer_token';

const rootReducer = combineReducers({
    user: UserReducer,
    token: TokenReducer
});

export default rootReducer;
