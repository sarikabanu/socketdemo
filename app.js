/**
 * Created by sreejeshpillai on 09/05/15.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})
io.on('connection',function(socket){
    console.log('one user connected '+socket.id);
    socket.on('showItems',function(data){
	console.log('one user connected###### '+data);
     	socket.broadcast.emit('showItems', data);
	})

       socket.on('showEvents',function(data){
		 console.log('one user connected###### '+data);
        socket.broadcast.emit('showEvents', data);
    })


    socket.on('disconnect',function(){
        console.log('one user disconnected '+socket.id);
    })
})



http.listen(3000,function(){
    console.log('server listening on port 3000');
})





