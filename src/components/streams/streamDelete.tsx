import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStream } from '../../actions/index';

type IParams = {
  id: string;
};

const StreamDelete = (props: any) => {
  const dispatch = useDispatch();
  const {id} = useParams<IParams>() as any;
  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id]);

  const streams = useSelector((state: any) => state.stream);
  const selecteedStream = streams[id];
  console.log(selecteedStream);

  return <div>StreamEdit </div>;
};


export default StreamDelete;
