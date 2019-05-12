import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { listSort } from "./Utils";

class Home extends Component {
  state = {
    comments: [],
    current: 3,

    currentPage: 1,
    commentsPerPage: 10,
  };

  componentDidMount() {
    axios
      // .get("https://api-comments.azurewebsites.net/api/Comments")
      .get("https://comments-api.azurewebsites.net/api/Comments")
      .then(response => {
        console.log(response.data);
        this.setState({
          comments: response.data
        });
      });
  }

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page
    });
  };

  render() {
    const { comments, currentPage, commentsPerPage } = this.state;

    // Logic for displaying current comments
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = listSort(comments).slice(
      indexOfFirstComment,
      indexOfLastComment
    );

    const renderComments = currentComments.map((comment, index) => (
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
            <div style={{ flexBasis: "150px" }}>{comment.id}</div>
            <div style={{ flexBasis: "150px" }}>{comment.name}</div>
            <div style={{ flexBasis: "150px" }}>{comment.body}</div>
          </div>
        }
      </div>
    ));

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(comments.length / commentsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

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
          <ul id="page-numbers" style={{ marginLeft: "200px" }}>
            {renderPageNumbers}
          </ul>
          {renderComments}
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

  #page-numbers {
    list-style: none;
    display: flex;
  }

  #page-numbers > li {
    margin-right: 0.3em;
    color: blue;
    user-select: none;
    cursor: pointer;
  }
`;
