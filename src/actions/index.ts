import streams from '../apis/streams';
import { Idispatch } from '../store';
import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREMS,
    SIGN_IN,
    SIGN_OUT
} from './types';

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
  const response = await streams.post('/streams', formData);
  dispatch({type: CREATE_STREAM, payload: response.data});
};

export const fetchStreams = () => async (dispatch: Idispatch) => {
  const response = await streams.get('/streams');
  dispatch({type: FETCH_STREMS, payload: response.data});
};

export const fetchStream = (id: any) => async (dispatch: Idispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({type: FETCH_STREAM, payload: response.data});
};

export const editStream =
  (id: any, formData: any) => async (dispatch: Idispatch) => {
    const response = await streams.put(`/streams/${id}`, formData);
    dispatch({type: EDIT_STREAM, payload: response.data});
  };

export const deleteStream = (id: any) => async (dispatch: Idispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({type: DELETE_STREAM, payload: id});
};
