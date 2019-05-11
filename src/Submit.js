import React, { Component } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

class Submit extends Component {
  state = {};

  handleName = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleBody = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = data => {
    data.preventDefault();

    // .post("https://comments-api.azurewebsites.net/api/Comments", {

      let config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          }
        }

        // let data = {
        //   "name": "Dave",
        //   "body": "Dave Body"
        // }

        // {
        //   "name": this.state.name,
        //   "body": this.state.body
        // }

    axios
      .post("https://api-comments.azurewebsites.net/api/Comments", {
          "name": this.state.name,
          "body": this.state.body
        })
      .then(response => {
        toast(
          "Your name and body has been save. Plese go Home tab"
        );
      });
  };

  render() {
    return (
      <BodyStyle>
        <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
        />

        <form onSubmit={this.handleSubmit} className="contents">
          <input
            className="submit"
            type="input"
            name="name"
            value={this.state.name}
            onChange={this.handleName}
            placeholder="Name Field"
          />
          <input
            className="submit"
            type="input"
            name="body"
            value={this.state.body}
            onChange={this.handleBody}
            placeholder="Body Field"
          />
          <button type="submit">Submit</button>
        </form>
      </BodyStyle>
    );
  }
}

export default Submit;

const BodyStyle = styled.div`
  .contents {
    width: 580px;
    margin: 20px auto;
  }

  input {
    height: 30px;
    width: 180px;
    margin: 2px;
  }

  button {
    height: 35px;
    width: 180px;
    margin: 1px 1px;
  }

  .Toastify__toast-body {
    color: white;
    background: black;
  }
  
  .Toastify__toast-container--top-center {
    top: -0.3em;
    left: 0;
    margin: 0 auto;
    width: 100%;
  }
  
  .Toastify__toast--default {
    background: black;
    color: #aaa;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 70vw;
    margin: 0 auto;
  }
  
  .Toastify__close-button {
    font-weight: normal;
    font-size: 16px;
    width: auto;
  }
  
  .Toastify__close-button--default {
    color: white;
    opacity: 0.5;
  }
  
  .toast-container {
    top: 1em;
      left: 50%;
      margin-left: -160px;
  
      z-index: 9999;
      position: fixed;
      padding: 4px;
      width: 320px;
      box-sizing: border-box;
      color: #fff;
      background: #000;
      align-self: flex-start;
  }
`;
