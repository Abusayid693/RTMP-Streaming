import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStream } from '../../actions/index';

type IParams = {
  id: string;
};

const StreamEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams<IParams>() as any;

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id]);

  const streams = useSelector((state: any) => state.stream);
  const selecteedStream = streams[id];

  return (
    <>
      <h1>Edit Stream</h1>
      <h2>{JSON.stringify(selecteedStream)}</h2>
    </>
  );
};

export default StreamEdit;
