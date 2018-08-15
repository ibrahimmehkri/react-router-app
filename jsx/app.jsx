var React = require("react");
var ReactDOM = require("react-dom");
var Router = require("./router.jsx").Router;
var Location = require("./space-station.jsx").Location;

const mapping = {
  "#profile": <div>Profile<a href = "#">(Home)</a></div>,
  "#accounts": <div>Accounts<a href = "#">(Home)</a></div>,
  "#isslocation": <div>Space Station Information<a href = "#">(Home)</a> <div><Location /></div></div>,
  "*": <div>Dashboard<br />
          <div><a href = "#profile">Profile</a></div>
          <div><a href = "#accounts">Accounts</a></div>
          <div><a href = "#isslocation">Space Station Information</a></div>
      </div>
}

ReactDOM.render(
  <Router mapping = {mapping}/>,
  document.getElementById("app"));
