import React from 'react';
import './navBar.css';
import Data from './Data';
import Items from './Items';

class NavBar extends React.Component {
  state = {
    searchValue: '',

  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchValue = this.state.searchValue;
    console.log('You searched for', searchValue);
    this.setState({ searchValue:'' })
  }

  handleSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return(
    <div className="navBar__container">
      <div className="container__box">
        <div className="container__box-link">Li</div>
        <form onSubmit={this.handleSearchSubmit}>
          <input type="text" value={this.state.searchValue} placeholder=" &#x2315; Search" onChange={this.handleSearchChange} />
        </form>
      </div>
      <div className="container__box">
        {Data.map((iconInfo, i) => {
          return <Items key={i} info={iconInfo}  />
        })}
      </div>
    </div>
    );
  }
}

export default NavBar;