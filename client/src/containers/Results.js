import React, { Component } from 'react';
import { connect } from 'react-redux'

class Results extends Component {
    constructor(props) {
        super(props);
        console.log( JSON.stringify(props));
    }
    
    render() {
        console.log(this);
        const results = this.props.podcasts.map( (inst, i) => {
            return (
                <li key={i}>
                    <span><img src={inst.artworkUrl30} alt={inst.artistName} />  </span>
                    {inst.artistName}<br/>
                    {inst.collectionName}                    
                </li>
            )
        } );
        console.log(results);
        return (
            <div>Results:
                <ul>
                    {results}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    podcasts: state.podcasts
})

export default connect(mapStateToProps)(Results)