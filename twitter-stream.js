var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs'), twitter = require('ntwitter')
  , util = require('util');


var twit = new twitter({
  consumer_key: '[YOUR KEY HERE]',
  consumer_secret: '[YOUR KEY HERE]',
  access_token_key: '[YOUR KEY HERE]',
  access_token_secret:'[YOUR KEY HERE]'
});


app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function(socket) {
  twit.stream('statuses/filter', {'track':'Dubai'},
    function(stream) {
      stream.on('data',function(data){
        socket.emit('twitter',data);
      });
    });
});

