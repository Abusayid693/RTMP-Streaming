import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { createStream } from '../../actions';
import StreamForm from './streamForm';

interface IStreamCreate {
  createStream: any;
}

const StreamCreate = ({createStream}: IStreamCreate) => {
  const navigation = useNavigate();

  const handleFormSubmit = async (formProps: any) => {
    await createStream(formProps);
    navigation('/');
  };

  return <StreamForm onSubmit={handleFormSubmit} />;
};

export default connect(null, {createStream})(StreamCreate);
