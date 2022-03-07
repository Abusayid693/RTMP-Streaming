import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { editStream } from '../../actions';
import { fetchStream } from '../../actions/index';
import StreamForm from './streamForm';

type IParams = {
  id: string;
};

const StreamEdit = ({editStream}: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const {id} = useParams<IParams>() as any;

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id]);

  const streams = useSelector((state: any) => state.stream);
  const selecteedStream = streams[id];

  const handleFormSubmit = async (formProps: any) => {
    await editStream(id, formProps);
    navigation('/');
  };

  return (
    <>
      <h1>{JSON.stringify(selecteedStream)}</h1>
      <StreamForm onSubmit={handleFormSubmit} />
    </>
  );
};

export default connect(null, {editStream})(StreamEdit);
