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
        fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&endtime&minmagnitude=3', {
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
        return <h2>{myDate.toLocaleString()}</h2>
    }

    render() {


            
        const tsunami = (statement,name) => {
          if(statement === 1){
            console.log("statement = " + statement + " name = " + name);
              return (
                  <div>
                    <h2><div class="warning-msg">Alert:</div> Tsunami statement issued check <a href="https://www.tsunami.gov/" target="_blank" variant="primary">tsunami.gov</a> or local media</h2>
                 </div>
              )
          }
      }
  
        if(this.state.loading){
            return (
                <div>
                <h3>Loading Recent Earthquakes...</h3>
                <Spinner animation="border" role="status">
                </Spinner>
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
            <h2>Location: {post['geometry']['coordinates'][1]}, {post['geometry']['coordinates'][0]}</h2>
            {tsunami(post['properties']['tsunami'],post['properties']['title'])}
            <Button href={post['properties']['url'] + "/map"} target="_blank" variant="primary">USGS Map</Button>
            </div>
             </div>))
    
             }
            </div>
        );
    }      
}