import { FETCH_USERS } from '../actions/fetchUsers';

const userReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case FETCH_USERS:
            console.log('payload in FETCH_USERS reducer switch', payload)
            return payload
        default:
            return state
    };
};

export default userReducer;