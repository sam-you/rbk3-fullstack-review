var express = require('express');
var http=require('http');
var request = require('request');
var githubapi = require('github-api');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');
var db=require('../database/index');
var github = new githubapi({
	version: '3.1.0'
});

  
var app = express();
app.use(useragent.express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.post('/repos/import', function (req, res) {
  // TODO
});
app.post('/repos', function (req, res) {
  //var ahmad={id:1,name:'ahmad',username:'hadsome',url:'ahmad.com'};
	 var username=req.body.username;
   console.log(username);
     var options = {
   url: 'https://api.github.com/users/'+username+'/repos',
   headers: {
     'User-Agent': 'request'
  }
};
 
 function callback(error, response, body) {

if (!error && response.statusCode == 200) {
     var repos=[];
     var info = JSON.parse(body);
     for(var i=0;i<info.length;i++){
      //console.log(JSON.stringify(info[i].id));
      data={
        id:info[i].id,
        name:info[i].name,
        username:username,
        url:info[i].html_url
      }
      var ahmad=new db(data);
      ahmad.save(function (err) {
        if (err) return handleError(err);
        //console.log(ahmad);
    });
      repos.push(data);
     }
     db.find({username:username}).exec(function(err, user){
      console.log(user);
     })
     //res.send(JSON.stringify(info[0].id));
    //console.log(info.forks_count + " Forks");
  }
   }
 
 request(options, callback);
});

app.get('/repos', function (req, res) {
 //console.log('api.github.com/users/${username}/repos')
 // console.log('hi');
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
   //console.log('api.github.com/users/${username}/repos')

  //var repo = github.getRepo(username, reponame);
   //console.log(repo);
});

