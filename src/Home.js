import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { listSort } from "./Utils";

class Home extends Component {
  state = {
    // comments: [],
    comments: [
      { id: 31, name: "Dave Lee", body: "Body" },
      { id: 30, name: "Dave Lee", body: "Body" },
      { id: 29, name: "Dave Lee", body: "Body" },
      { id: 28, name: "Dave Lee", body: "Body" }
    ],
    current: 3,

    currentPage: 1,
    todosPerPage: 10,
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://api-comments.azurewebsites.net/api/Comments")
      .then(response => {
        console.log(response.data);
        this.setState({
          // comments: response.data
          todos: response.data
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
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = listSort(todos).slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    const renderTodos = currentTodos.map((todo, index) => (
      // return <li key={index}>{JSON.stringify(todo)}</li>;
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
            <div style={{ flexBasis: "150px" }}>{todo.id}</div>
            <div style={{ flexBasis: "150px" }}>{todo.name}</div>
            <div style={{ flexBasis: "150px" }}>{todo.body}</div>
          </div>
        }
      </div>
    ));

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
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
          {renderTodos}
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
