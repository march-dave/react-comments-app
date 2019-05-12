import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { listSort } from "./Utils";
import Pagination from "rc-pagination";
// import 'rc-pagination/assets/index.css';

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
    todosPerPage: 3,
    // todos: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
    // todos: [
    //   { id: 31, name: "Dave Lee", body: "Body" },
    //   { id: 30, name: "Dave Lee", body: "Body" },
    //   { id: 29, name: "Dave Lee", body: "Body" },
    //   { id: 28, name: "Dave Lee", body: "Body" }
    // ]
    // todos: ["1dave", "john", "jane","2dave", "john", "jane","3dave", "john", "jane","4dave", "john", "jane"]
    todos: [{id: 1, name:'dave'}, {id: 2, name:'dave'}, {id: 3, name:'dave'}, {id: 4, name:'dave'}]
  };

  componentDidMount() {
    // axios
    //   .get("https://api-comments.azurewebsites.net/api/Comments")
    //   .then(response => {
    //     console.log(response.data);
    //     this.setState({
    //       comments: response.data
    //       // todos: response.data
    //     });
    //   });
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
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    
    // console.log(todos);
    // debugger;

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{JSON.stringify(todo)}</li>;
    });

    
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    
    const renderPageNumbers = pageNumbers.map(number => {
      console.log(number);
      debugger;
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
          <ul>{renderTodos}</ul>
          <ul id="page-numbers">{renderPageNumbers}</ul>

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
