import React from 'react';
// import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    }, () => {
      if (this.isSearchable()) this.handleSearch();
    });
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  isSearchable() {
    const { state: { location, term } } = this;

    return (location !== '' && term !== '')
      ? true : false;
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(option => {
      const sortByOptionValue = this.sortByOptions[option];
      return <li 
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => this.handleSortByChange(sortByOptionValue)}
        >
            {option}
        </li>;
    });
  }

  handleSearch() {
    const { state: { location, sortBy, term } } = this;

    if (this.isSearchable()) {
      this.props.searchYelp(term, location, sortBy);
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="search cuisine, restaurant, curbside pickup ..." />
          <input onChange={this.handleLocationChange} placeholder="location" />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch} >
          <a href="#">feed me!</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
