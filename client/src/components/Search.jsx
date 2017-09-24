import React from 'react';
  import $ from 'jquery';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    var th=this;
    this.props.onSearch(this.state.term);
    
  }

  render() {
    return (
      //<form action="/repos" method="post">
      <div>

      <h4>Add more repos!</h4>
      Enter a github username:  <input id="username" type="text" name="username" value={this.state.terms} onChange={this.onChange.bind(this)}/>
      <button > Add Repos </button>      
      
     </div>
     //</form>)

       
  }
}
//
//onClick={this.search()}
//
export default Search;