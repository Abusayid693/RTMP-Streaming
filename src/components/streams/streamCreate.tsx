import React from 'react';
import { connect } from 'react-redux';
import { Field, FormErrors, InjectedFormProps, reduxForm } from 'redux-form';
import { createStream } from '../../actions';

interface Iform {
  title?: string;
  description?: string;
}

class StreamCreate extends React.Component<
  InjectedFormProps<{}, {}, string>,
  any
> {
  renderError(meta: any) {
    const {touched, error} = meta;
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return null;
  }

  renderInput = (formProps: any) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? 'error' : ''
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  handleFormSubmit = (formProps: any)=>  {
    // @ts-ignore
    this.props.createStream(formProps);
  }

  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleFormSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label={'Enter Title'}
        />
        <Field
          name="description"
          component={this.renderInput}
          label={'Enter Description'}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

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
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);
