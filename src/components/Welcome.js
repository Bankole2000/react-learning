import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Class Comp: Hi {this.props.name} a.k.a {this.props.heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
