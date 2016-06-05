


var http = require('http');
var url = require('url');
var qstring = require('querystring');

http.createServer(function(req, res){
  console.log(req.url);
  var stuff = qstring.parse(req.url);

  console.log(stuff.number);
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.write('<html><head><title>Simple GET Server</title></head>');
  res.write('<body>');
  res.write('<h2>did you say ' + stuff.number + '?');



  res.write('<h2>the number ' + stuff.number + ' is ');
  res.write('<h1>Counting from 0 to 100');
  for ( i = 0; i < 101; i++ ){
  res.write('<p>' + i + '</p>');
  }
  res.end('\n</body></html>');
}).listen(8080);
