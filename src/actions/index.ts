import streams from '../apis/streams';
import { Idispatch } from '../store';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (id: string) => {
  return {
    type: SIGN_IN,
    payload: id,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formData: any) => async (dispatch: Idispatch) => {
  streams.post('/streams', formData);
  dispatch({type: 'STREAM_CREATE'});
};
