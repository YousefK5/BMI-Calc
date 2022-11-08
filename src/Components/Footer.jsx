import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
    // console.log("Constructer Function");
    this.state = {
      title: "Footer Component",
      count: 0,
    };
  }

  componentDidMount() {
    // console.log("Mount");
  }

  handleClick = () => {
    // console.log(this.state.count);
    setTimeout(() => {
      this.setState({
        title: "New Footer",
        count: this.state.count + 1,
      });
    }, 3000);
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("Update" , prevProps , prevState);
  }

  componentWillUnmount() {
    // console.log("Delete");
  }

  render() {
    // console.log("Render Function");
    return (
      <div className="footer">
        <h1>Footer Copyright &copy; {this.props.year}</h1>
      </div>
    );
  }
}
