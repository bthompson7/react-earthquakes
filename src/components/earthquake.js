import React, { Component } from 'react';

export default class Earthquake extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
         posts:[]
       };
    }


    componentDidMount(){
        fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&endtime&minmagnitude=4', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then(response => response.json())
          .then(function(response){
              console.log(response)
              this.setState({posts:response['features']})
              console.log(this.state.posts[0]['properties']['title'])
          }.bind(this));
    }

    
    unixToDate(unixDate){
        var myDate = new Date(unixDate)
        console.log(myDate.toLocaleString());
        return <h2>{myDate.toLocaleString()}</h2>
    }

    render() {
        return (
            <div>
            {this.state.posts.map(post =>
            (
            <div class="eq-content">
            {this.unixToDate(post['properties']['time'])}
            <h2>{post['properties']['title']}</h2>
             </div>))
    
             }
            </div>
        );
    }      
}