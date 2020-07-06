import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import './Box.css'

library.add(faFlag);

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBox: true,
    };
  }

  handleButtonPress(event) {
    switch (event.nativeEvent.which) {
      case 1:
        console.log("left click");
        break;
      case 3:
        console.log("right click");
        break;
      default:
        console.log("none");
    }
    this.setState({ isBox: false });
  }

  handleButtonRelease() {
    // this.setState({ isBox: true });
  }

  render() {
    return (
      <div
        className={"one " + (this.state.isBox ? "box" : "unbox")}
        onMouseDown={this.handleButtonPress.bind(this)}
        onMouseUp={this.handleButtonRelease.bind(this)}
      > 
        &#42;
        {/* &#96; */}
        {/* {this.props.value} */}
      </div>
    );
  }
}

export default Box;
