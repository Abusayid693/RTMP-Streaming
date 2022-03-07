import FlvJs from 'flv.js';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStream } from '../../actions/index';

type IParams = {
  id: string;
};

const StreamEdit = () => {
  const dispatch = useDispatch();
  const {id} = useParams<IParams>() as any;

  const videoRef = useRef(null);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id]);

  useEffect(() => {
    const flvPlayer = FlvJs.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    // @ts-ignore
    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
    console.log(videoRef);
    return () => {
      flvPlayer.destroy();
    };
  }, [videoRef]);

  const streams = useSelector((state: any) => state.stream);
  const selecteedStream = streams[id];

  return (
    <>
      <h1>View Stream</h1>
      <video
        ref={videoRef}
        style={{width: '80%', border: '1px solid black'}}
        controls
        ></video>
      <h2>Title : {selecteedStream.title}</h2>
      <h2>Description : {selecteedStream.description}</h2>
    </>
  );
};

export default StreamEdit;
