import _ from 'lodash';
import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREMS
} from '../actions/types';

export default (state = {}, action: any) => {
  switch (action.type) {
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_STREMS:
      return {...state, ...action.payload};
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
