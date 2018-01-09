import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
    constructor(props) {
        super(props);
    }
    renderResults(data){
        console.log("Results are: ", data);
        //render results here
        const artwork = (data.artworkUrl30) ? data.artworkUrl30 : data.artworkUrl60;
        //searching "food" returns "software" not podcasts!
        if (data.kind === "podcast") {
            return (
                <li key={data.trackId}>
                    <span><img src={artwork} alt={data.artistName} />  </span>
                    {data.artistName} | {data.collectionName}   
                </li>
            );    
        }
        return (
            <li>kind on the api is: {data.kind}</li>
        );  
    }
    
    render() {
        const  { podcasts } = this.props.podcasts;
        const results = podcasts ? podcasts.results.map(this.renderResults) : <div>Results to go here</div>;

        return (
            <div>Results:
                <ul style={{ listStyleType: "none" }}>
                    {results}
                </ul>
            </div>
        )
    }
}

function mapStateToProps( {podcasts} ) {
    console.log("mapStateToProps is: ",podcasts);
    return { podcasts }
}

export default connect(mapStateToProps)(Results)