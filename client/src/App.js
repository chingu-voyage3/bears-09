import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import Results from './components/Results'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { podcasts: [] }

    this.podcastSearch('comedy')  // Initial search on page load
  }

  podcastSearch(term) {
    // https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
    /*    iTunes Search API logic here    */
    fetch(`https://itunes.apple.com/search?media=podcast&term=${term}&limit=10`)
      .then(response => response.json())
      .then(data=> {
        this.setState({podcasts: data.results})
        console.log(this.state.podcasts);
      })
  }

  render() {
    return (
      <div>
        <SearchBox onSearchTermChange={term => this.podcastSearch(term)} />
        <Results {...this.state} />
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