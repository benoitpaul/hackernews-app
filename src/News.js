import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './store/News';

class News extends React.Component {
    render() {
        console.log(this.props.news);
      return (
        <div>
            <button onClick={() => this.props.pending()}>load stories</button>
            { this.props.news.loading && <div>loading...</div> }
            {
                this.props.news.stories.map(story => <div key={story}>{story}</div>)
            }
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      news: state.news
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(News);