require('http').createServer(function handleRequest(req,res){
    res.writeHead(200, {'content-type' : 'text/plain'});
    console.log("recceived");
    res.end('Yayay');
}).listen(process.env.PORT, process.env.IP);

// Note: when spawning a server on Cloud9 IDE, 
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console
