import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { listSort } from "./Utils";

class Home extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    // axios
    // .get("https://comments-api.azurewebsites.net/api/Comments")
    fetch("https://api-comments.azurewebsites.net/api/Comments")
      .then(response => {
        console.log(JSON.stringify(response.data));

        this.setState({
          comments: response.data
        });
      });
  }

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
            <div style={{ flexBasis: "150px"}}>{item.id}</div>
            <div style={{ "flexBasis": "150px" }}>{item.name}</div>
            <div style={{ "flexBasis": "150px" }}>{item.body}</div>
          </div>
        }
      </div>
    ));

    return (
      <BodyStyle>
        <div className="contents">{list}</div>{" "}
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
