var net = require('net');
var format = require('util').format;

var server = net.createServer();

server.on('connection', function(conn) {

  var printPrefix = '[' + conn.remoteAddress + ':' + conn.remotePort +  '] ';
  function print() {
    var formatted = format.apply({}, arguments);
    console.log(printPrefix + formatted);
  }
  function dataHandler(data) {
      print('got some data:', data);
      conn.emit('error', new Error("bahhhhhh"));
  }
  print('connected');

  conn.on('data', function(data) {
    print('got some data:', data);
  });

  setTimeout(function() {
      conn.removeListener('data', dataHandler)
  }, 100);

  conn.once('end', function() {
    print('ended.');
  });

  conn.once('close', function() {
    print('closed.');
  });

  conn.on('error', function(err) {
    print('error:', err);
    conn.write("ERROR");
    conn.end();
  });

  conn.setEncoding('utf-8');

});

server.on('error', console.error);

server.listen(process.env.PORT, process.env.IP);

process.on('uncaughtException', function(err) {
    console.log("uncaught exception: ", err);
    process.exit();
})