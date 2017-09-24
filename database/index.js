
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(' were connected!');
});
var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  username: String,
  url: String
});

var Repo = mongoose.model('Repo', repoSchema);

var data={id:1,name:'ahmad',username:'hadsome',url:'ahmad.com'};
function saverepo(data) {
    var ahmad=new Repo(data);
    ahmad.save(function (err) {
        if (err) return handleError(err);
        console.log('hi');
    })
}

module.exports = Repo;
