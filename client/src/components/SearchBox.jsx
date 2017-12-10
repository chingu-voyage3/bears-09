import React, { Component } from 'react'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-box">
        <input onChange={e => this.onInputChange(e.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

}

export default SearchBox;