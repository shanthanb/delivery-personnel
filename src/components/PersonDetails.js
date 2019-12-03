import React from "react";
import Image from "../assets/images/man.svg"
class PersonDetails extends React.Component {
  state = {
    name: "",
    id: "",
    status: ""
  };

  componentDidMount() {
    this.setState({
      name: this.props.name,
      id: this.props.id,
      status: this.props.status
    });
  }
  //To design the architecture of the perons
  render() {
    const Style = {
      fontSize: "20px",
      color: "white"
    };
    return (
      <div className="text-center">
        <img src={Image} width="40" alt={this.props.name}></img>
        <br />
        <p style={Style}>{this.props.name}</p>
      </div>
    );
  }
}

export default PersonDetails;
