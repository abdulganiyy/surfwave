import React, { Component } from "react";
import Toolbar from "../Components/Toolbar/Toolbar";
import Backdrop from "../Components/UI/Backdrop/Backdrop";
import Sidebar from "../Components/Sidebar/Sidebar";

class Layout extends Component {
  state = {
    showSidebar: false,
  };

  sidebarHandler = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  };
  render() {
    return (
      <div>
        {/* <header>
          <div className="Logo">Bluewaves</div>
        </header> */}
        <Toolbar clicked={this.sidebarHandler} />
        <Backdrop show={this.state.showSidebar} clicked={this.sidebarHandler} />
        <Sidebar show={this.state.showSidebar} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
