import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './store/News';
import './News.css';

import Story from './news/Story';

class News extends React.Component {
    render() {
      return (
        <div className="News">
            <button onClick={() => this.props.getStories()}>load stories</button>
            { this.props.news.loading && <div>loading...</div> }
            {
                this.props.news.stories.map(story => <Story key={story.id} {...this.props} story={story}></Story>)
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