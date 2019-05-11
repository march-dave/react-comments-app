import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { listSort } from "./Utils";
import Pagination from "rc-pagination";
// import 'rc-pagination/assets/index.css';

class Home extends Component {
  state = {
    comments: [],
    current: 3
  };

  componentDidMount() {
    axios
      .get("https://api-comments.azurewebsites.net/api/Comments")
      .then(response => {
        this.setState({
          comments: response.data
        });
      });
  }

  onChange = page => {
    console.log(page);
    this.setState({
      current: page
    });
  };

  render() {
    const list = listSort(this.state.comments).map((item, index) => (
      <div key={`${index + 1}`}>
        {
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              border: "1px solid #cababa47",
              height: "3rem",
              margin: "10px",
              paddingTop: "15px"
            }}
          >
            <div style={{ flexBasis: "150px" }}>{item.id}</div>
            <div style={{ flexBasis: "150px" }}>{item.name}</div>
            <div style={{ flexBasis: "150px" }}>{item.body}</div>
          </div>
        }
      </div>
    ));

    return (
      <BodyStyle>
        <div className="contents">
          <div style={{ marginLeft: "200px" }}>
            <Pagination
              onChange={this.onChange}
              current={this.state.current}
              total={25}
            />
          </div>
          {list}
        </div>
      </BodyStyle>
    );
  }
}

export default Home;

const BodyStyle = styled.div`
  .contents {
    width: 580px;
    margin: 20px auto;
  }
`;
