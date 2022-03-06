import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { Field, FormErrors, InjectedFormProps, reduxForm } from 'redux-form';
import { createStream } from '../../actions';

interface Iform {
  title?: string;
  description?: string;
}

interface IStreamCreate extends InjectedFormProps<{}, {}, string> {
  createStream: typeof createStream;
}

const StreamCreate = ({createStream, handleSubmit}: IStreamCreate) => {
  const navigation = useNavigate();

  const renderError = (meta: any) => {
    const {touched, error} = meta;
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return null;
  };

  const renderInput = (formProps: any) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? 'error' : ''
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {renderError(formProps.meta)}
      </div>
    );
  };

  const handleFormSubmit = async (formProps: any) => {
    await createStream(formProps);
    navigation('/');
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label={'Enter Title'} />
      <Field
        name="description"
        component={renderInput}
        label={'Enter Description'}
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (values: Iform): FormErrors<Iform> => {
  const errors: Iform = {};
  if (!values.title) {
    errors.title = 'title is necessary';
  } else if (!values.description) {
    errors.description = 'description is necessary';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
  // @ts-ignore
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);
