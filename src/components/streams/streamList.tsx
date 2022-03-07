import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component<{
  fetchStreams: any;
  data: any;
  userId: string;
  isSignedIn: boolean;
}> {
  componentDidMount() {
    this.props.fetchStreams();
  }

  adminControls(id: number) {
    return (
      <div className="right floated content">
        <Link to={`/streams/edit/${id}`} className="ui button primary">
          Edit
        </Link>
        <Link to={`/streams/delete/${id}`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  }

  renderListItems() {
    return this.props.data.map((item: any) => {
      return (
        <div className="item" key={item.id}>
          {this.props.userId &&
            this.props.userId === item.userId &&
            this.adminControls(item.id)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`streams/${item.id}`}>{item.title}</Link>
            <div className="description">{item.description} </div>
          </div>
        </div>
      );
    });
  }

  createStream() {
    return (
      <div>
        <Link to="streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderListItems()}</div>
        {this.createStream()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    data: Object.values(state.stream),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);
