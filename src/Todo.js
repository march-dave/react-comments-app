import React, { Component } from "react";
import styled from "styled-components";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
      currentPage: 1,
      todosPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

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

    return (
      <BodyStyle>
        <div>
          <ul>{renderTodos}</ul>
          <ul id="page-numbers">{renderPageNumbers}</ul>
        </div>
      </BodyStyle>
    );
  }
}

export default Todo;

const BodyStyle = styled.div`
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
