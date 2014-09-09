/*
 * Serve content over a socket
 */

module.exports = function (socket) {
  
 // broadcast a user's message to other users
 socket.on('send:moveOn', function (data) {
    socket.broadcast.emit('send:moveOn', {
      moveOn: data.moveOn
    });
  });

  socket.emit('send:moveOn', {
  	moveOn: false
  })

};
