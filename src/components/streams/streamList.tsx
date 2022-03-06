import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component<{
  fetchStreams: any;
  data: any;
}> {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderListItems() {
    return this.props.data.map((item: any) => {
      return (
        <div className="item" key={item.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">{item.title}
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
        <div className='ui celled list'>
        {this.renderListItems()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {data: Object.values(state.stream)};
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);
