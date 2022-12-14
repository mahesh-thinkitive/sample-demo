import React, { Component } from "react";
import Header from "../../components/Header";
import SidebarMenu from "../../components/Sidebar";

class TestFetch extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isLoading: true });
    return fetch("https://api.github.com/users/londonappdev")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <Header />

        <div className="d-flex">
          <SidebarMenu />

          <div className="w-100" style={{ padding: 40 }}>
            <h1>Inside Alert</h1>
            <div className="App">
              <button onClick={this.handleClick}>Click</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TestFetch;
