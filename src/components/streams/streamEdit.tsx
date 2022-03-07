import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { editStream } from '../../actions';
import { fetchStream } from '../../actions/index';
import StreamForm from './streamForm';

type IParams = {
  id: string;
};

const StreamEdit = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams<IParams>() as any;

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id]);

  const streams = useSelector((state: any) => state.stream);
  const selecteedStream = streams[id];

  const handleFormSubmit = async (formProps: any) => {
    await dispatch(editStream(id, formProps));
    navigation('/');
  };

  return (
    <>
      <h1>Edit Stream</h1>
      <StreamForm
        initialValues={_.pick(selecteedStream, 'title', 'description')
        }
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default StreamEdit;
