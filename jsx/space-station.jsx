var React = require("react");
var ReactDOM = require("react-dom");

class Location extends React.Component {
  constructor(props){
    super(props);
    this.state = {location: ""};
    this.updateLocation = this.updateLocation.bind(this);
  }
  updateLocation(){
    fetch("http://api.open-notify.org/iss-now.json?").then(function(response){
      return response.json();
    }).then(function(result){
    console.log(result);
    this.setState({location: result});
  }.bind(this))
  }

  componentDidMount(){
    this.updateLocation();
  }
  render(){
    if(this.state.location){
      let pos = this.state.location.iss_position;
      let timestamp = this.state.location.timestamp;
      return(
        <div>
          <p>TimeStamp {timestamp}, Latitude {pos.latitude} Longitude {pos.longitude}</p>
        </div>
      );
    } else {
      return <p>Hello World! </p>
    }

  }
}

module.exports = {
  Location: Location
}
