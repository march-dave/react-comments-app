import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <BodyStyle>
        <div className="header">
          <NavLink exact to="/" className="item" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/submit" className="item" activeClassName="active">
            Submit
          </NavLink>
        </div>
      </BodyStyle>
    );
  }
}

export default Header;

const BodyStyle = styled.div`
  .header {
    background: #fff;
    color: #gray;
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  .item {
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: table-cell;
    text-decoration: none;
    font-size: 1.1rem;
  }

  .item:hover {
    background: #748ffc;
  }

  .item:active,
  .item.active {
    background: #5c7cfa ;
    color: white;
  }
`;
