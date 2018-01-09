import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPodcasts } from '../actions/index'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    //this.props.fetchPodcasts('Comedy')
  }
  //need this to dislay text in search field
  onInputChange(event) { 
    this.setState({ term: event.target.value })
  }
  //actually runs api call when enter is pressed
  onFormSubmit(event) {
    event.preventDefault();
    //We need to go and fetch podcasts data
    this.props.fetchPodcasts(this.state.term);
    //reset the input field
    this.setState( { term: '' } ); 
  }

  render() {
    return (
      <div className="search-box">
        <form 
          className="input-group"
          onSubmit={this.onFormSubmit}
        >
          <input 
            value={ this.state.term }
            onChange={this.onInputChange} 
          />
        </form>
      </div>
    )
  }
}

//commented this, not sure if it was needed or not
// const mapStateToProps = state => ({  
//   podcasts: state.podcasts
// })

//uncommented this:
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPodcasts: fetchPodcasts }, dispatch)
}

//export default connect(mapStateToProps, {fetchPodcasts})(SearchBox);
export default connect(null, mapDispatchToProps)(SearchBox);