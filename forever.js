var forever = require('forever');

var child = new (forever.Monitor)('app.js', {
  max: 99999,
  silent: false,
  options: []
});

//child.on('exit', this.callback);
child.start();

forever.startServer(child);