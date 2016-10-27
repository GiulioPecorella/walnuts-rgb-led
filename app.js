var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
var five = require('johnny-five');

// node setup in order to reach the node server from other devices on the same network
app.listen(3000,'0.0.0.0',function(){
  console.log("Welcome to Walnuts \n");
  console.log("ready");
});


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

// Arduino UNO
var board = new five.Board();
board.on("ready", function() {
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  io.sockets.on('connection', function (socket) {
    led.on();
    socket.on('color', function (data) {
      led.color(data["color"]);
    });
  });
});
