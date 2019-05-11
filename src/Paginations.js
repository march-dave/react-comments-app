import React from 'react';
import Pagination from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

class Paginations extends React.Component {
  state = {
    current: 3,
  };
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
    return <Pagination onChange={this.onChange} current={this.state.current} total={25} />;
  }
}

export default Paginations;