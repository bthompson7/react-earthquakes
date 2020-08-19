import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default class Earthquake extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
         posts:[],
         loading:false
       };
       this.fetchEarthquakeData = this.fetchEarthquakeData.bind(this);
    }


    componentDidMount(){
      this.fetchEarthquakeData()
      setInterval(this.fetchEarthquakeData, 60000);
    }



    async fetchEarthquakeData(){
        this.setState({loading:true})
        fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&endtime&minmagnitude=4', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }).then(response => response.json())
          .then(function(response){
              console.log(response)
              this.setState({posts:response['features']})
              console.log(this.state.posts[0]['properties']['title'])
              this.setState({loading:false})

          }.bind(this));
    }
    
    unixToDate(unixDate){
        var myDate = new Date(unixDate)
        console.log(myDate.toLocaleString());
        return <h2>{myDate.toLocaleString()}</h2>
    }

    render() {

        if(this.state.loading){
            return (
                <div>
                <Spinner animation="border" role="status">
                </Spinner>
                <p>Fetching Recent Earthquakes...</p>
                </div>
                
            )
        }
        return (
            <div>
            {this.state.posts.map(post =>
            (
            <div class="eq-content">
                <div class="info">
            {this.unixToDate(post['properties']['time'])}
            <h2>{post['properties']['title']}</h2>
            <Button href={post['properties']['url'] + "/map"} variant="primary">View Map</Button>
            </div>
             </div>))
    
             }
            </div>
        );
    }      
}