import React from 'react';
import logo from './logo.svg';
import Persons from './persons/DeliveryPersons.js';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import PersonDetails from "../src/components/PersonDetails.js";
import AssignRevokeButton from './components/AssignRevokeButton';
class App extends React.Component{

  state={
    assigned:[],
    revoked:[]
  };
  //to mount early
  componentDidMount() {
    this.setState({ revoked: Persons,assigned: [] });
    
  }
  //function to display the revoked persons
 
  displayRevoked = () => {
    if (this.state.revoked.length > 0) {
      return this.state.revoked.map((person, key) => (
        <div className="col" key={key}>
          <PersonDetails
            name={person.name}
            id={person.id}
            status={person.status}
          ></PersonDetails>
        </div>
      ));
    } else {
      return <p className="text-danger p-3">No Persons</p>;
    }
  };
//function to display the assigned persons
  displayAssigned = () => {
    if (this.state.assigned.length > 0) {
      return this.state.assigned.map((person, key) => (
        <div className="col" key={key}>
           <PersonDetails
            name={person.name}
            id={person.id}
            status={person.status}
          ></PersonDetails>
        </div>
      ));
    } else {
      return <p className="text-danger p-3">No Persons</p>;
    }
  };

//function to move persons to assign side
  assignPerson = e => {
    if (this.state.revoked.length === 0) {
      return;
    }
    const revokedPersons = this.state.revoked;
    const person = revokedPersons.shift();
    const newAssigned = this.state.assigned;
    newAssigned.push(person);

    this.setState({
      revoked: revokedPersons,
      assigned: newAssigned
    });
  };
//function to move persons to render side
  revokePerson = e => {
    if (this.state.assigned.length === 0) {
      return;
    }
    const assignedPersons = this.state.assigned;
    const person = assignedPersons.shift();
    const newRevoked = this.state.revoked;
    newRevoked.push(person);

    this.setState({
      revoked: newRevoked,
      assigned: assignedPersons
    });
  };


render(){
  return (
    //The main page container
    <div className="container bg-dark p-5 shadow-sm ">
    <h3 className="text-primary text-center m-10 bg-red">
      Delivery Personnel Manager
    </h3>
    <div className="row p-3">
      <div className="col-md-4 border p-4" style={{ height: "500px" }}>
        <h6 className="text-center">Revoked</h6>
        <div className="row">{this.displayRevoked()}</div>
      </div>
      <div className="col-md-4 border d-flex justify-content-center align-items-center flex-column">
        <AssignRevokeButton
          assign={this.assignPerson}
          revoke={this.revokePerson}
        ></AssignRevokeButton>
      </div>
      <div className="col-md-4 border p-4" style={{ height: "500px" }}>
        <h6 className="text-center">Assigned</h6>

        <div className="row">{this.displayAssigned()}</div>
      </div>
    </div>
  </div>
  );

}
}
export default App;
