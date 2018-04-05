import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: red;
  border: green;
  padding: 20px;
  width: 100px;
  color: blue;
`;

class StyledComponent extends Component {
  render() {
    return <StyledDiv>{this.props.content}</StyledDiv>;
  }
}

StyledComponent.defaultProps = {
  content: `Hello this is my fancy pants component`
};

export default StyledComponent;
