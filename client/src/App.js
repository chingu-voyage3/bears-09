import React, { Component } from 'react';
import SearchBox from './containers/SearchBox'
// import Results from './containers/Results'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { podcasts: [] }
  }

  render() {
    return (
      <div>
        <SearchBox />
        {/* <Results {...this.state} /> */}
      </div>
    );
  }
}

export default App;



/*

Highlights by country
`https://itunes.apple.com/${country}/rss/toppodcasts/limit=25/json`

Podcast feed
`https://itunes.apple.com/lookup?id=${id}`

*/