var http = require('http');
var url = require('url');


http.createServer(function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  console.log(url.parse());
  res.write('<html><head><title>Simple GET Server</title></head>');
  res.write('<body>');
  res.write('<h1>Counting from 0 to 100');
  for ( i = 0; i < 101; i++ ){
    res.write('<p>' + i + '</p>');
  }
  res.end('\n</body></html>');
}).listen(8080);
