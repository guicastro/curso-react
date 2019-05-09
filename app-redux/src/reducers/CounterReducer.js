import * as ActionsTypes from './../actions/ActionTypes';

export default (state = 0, action) => {
    switch(action.type) {
        case ActionsTypes.ON_INCREMENT:
            return state + 1
        break;
        case ActionsTypes.ON_DECREMENT:
            return state - 1
        break;
        default:
            return state
    }
}