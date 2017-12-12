import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { fetchPodcasts } from '../actions/index'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  componentWillMount() {
    this.props.fetchPodcasts('Comedy')
  }
 
  onInputChange(term) { 
    this.setState({ term })
    this.props.fetchPodcasts(term) 
  }
  // Why calling fetchPodcasts without this.props does not fully work?

  render() {
    return (
      <div className="search-box">
        <input onChange={e => this.onInputChange(e.target.value)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({  
  podcasts: state.podcasts
})

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchPodcasts: fetchPodcasts }, dispatch)
// }

export default connect(mapStateToProps, {fetchPodcasts})(SearchBox);