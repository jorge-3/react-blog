var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
  var data = {"Hello": "World"}
  res.json(data);
  // res.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
