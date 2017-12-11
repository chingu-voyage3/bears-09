import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
        console.log( JSON.stringify(props));
    }
    
    render() {
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

export default Results