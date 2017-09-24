import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
var Ajax = require('react-ajax');
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    //var server =127.0.0.1:1128;
    console.log(`${term} was searched`);
    // TODO

    $.ajax({
        url : "http://127.0.0.1:1128/repos",
        type: "POST",
        data:term,
        //'content-Type': "json" ,
         dataType   : "json",
        success    : function(){
            console.log("Pure jQuery Pure JS object");
        }
    });
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.RepoList}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));