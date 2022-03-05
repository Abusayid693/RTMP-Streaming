import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index';
import { OAUTH_API } from '../constants';

declare global {
  interface Window {
    gapi: any;
  }
}

class GoogleAuth extends React.Component<{
  signIn: any;
  signOut: any;
  isSignedIn: boolean;
}> {
  state = {isSignIn: null};
  auth: any;
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: OAUTH_API,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };

  handleSignIn = () => {
    this.auth.signIn();
  };

  handleSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>loading...</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.handleSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.handleSignIn} className="ui green google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()} </div>;
  }
}

const mapStateToProps = (state: any) => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
