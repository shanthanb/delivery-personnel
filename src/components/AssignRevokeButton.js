import React from "react";

class AssignRevokeButton extends React.Component {
  constructor(props) {
    super(props);
  }
  //to design the assign and revoke button
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-medium btn-success w-30 my-5"
          onClick={this.props.assign}
        >
          ASSIGNED PERSONS >>
        </button>
        <button
          className="btn btn-large btn-primary w-30 my-5"
          onClick={this.props.revoke}
        >
         <a>   REVOKED PERSONS</a> 
        </button>
      </React.Fragment>
    );
  }
}
export default AssignRevokeButton;
