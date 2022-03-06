import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component<{
  fetchStreams: any;
  data: any;
  userId: string;
}> {
  componentDidMount() {
    this.props.fetchStreams();
  }

  adminControls() {
    return (
      <div className="right floated content">
        <button className="ui button primary">Edit</button>
        <button className="ui button negative">Delete</button>
      </div>
    );
  }

  renderListItems() {
    return this.props.data.map((item: any) => {
      return (
        <div className="item" key={item.id}>
          {this.props.userId === item.userId && this.adminControls()}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {item.title}
            <div className="description">{item.description} </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderListItems()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {data: Object.values(state.stream), userId: state.auth.userId};
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);
