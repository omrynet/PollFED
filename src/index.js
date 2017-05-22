//import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';
//import SearchBar from './components/search_bar';
import PollList from './components/poll_list';
//import VideoDetail from './components/video_detail';
//const API_KEY = 'AIzaSyAmjvFkULjx7Upa2hZUeQ5AN1wliQBi28M';
import axios from 'axios';

//create a new compinenet, this component should produce some html
var App = React.createClass({

  getInitialState: function() {
    return {
      jobs: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest =
      axios
        .get("https://boiling-tor-31289.herokuapp.com/users/me/polls")
        .then(function(result) {
          _this.setState({
            jobs: result.data
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <PollList Polls={this.state.jobs} />
      </div>
    )
  }
});


//Take this component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
