import { UPDATE_MOVIES } from '../actions/updateMovies';


// our reducer function for the movie list with receive the data from the action
// and return the payload. 
const movielistReducer = (state = {}, { type, payload }) => {
    // console.log here shows usless info.  see redux dev tools instead 
    // console.log('type in movieListReducer', type)
    switch (type) {
        case UPDATE_MOVIES:
            console.log('payload in UPDATE_MOVIES switch', payload)
            return { name: payload }
        default:
            return state
    };
};

export default movielistReducer;