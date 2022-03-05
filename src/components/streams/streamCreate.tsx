import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

class StreamCreate extends React.Component<
  InjectedFormProps<{}, {}, string>,
  any
> {
  renderInput(formProps: any) {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <form className='ui form'>
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
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
