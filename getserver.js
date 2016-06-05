
var Nprime = require('nprime');
//see https://www.npmjs.com/package/nprime
//for method deffinitions


var http = require('http');
var url = require('url');
var qstring = require('querystring');
//format for query +=={=======> http://localhost:8080/&number=12

http.createServer(function(req, res){
  console.log(req.url);
  var stuff = qstring.parse(req.url);

  var numberIn = stuff.number;
  console.log(numberIn);
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.write('<html><head><title>Simple GET Server</title></head>');
  res.write('<body>');
  res.write('<h2>did you say ' + numberIn + '?');

  var result = Nprime.test(numberIn);
  //var prevPrime = Nprime.prev(numberIn)
  //var nextPrime = Nprime.next(numberIn);
  console.log(result);
  //console.log(nextPrime);

  if ( result === -1 ) {
    result = "a prime"
  } else {
    result = "not a prime"
  }
  res.write('<h2>the number ' + numberIn + ' is ' + result + '</h2>');
  //res.write('<h2>the previous prime was ' + prevPrime + '</h2>');
  //res.write('<h2>the next prime is ' + nextPrime + '</h2>');
  // res.write('<h1>Counting from 0 to 100');
  // for ( i = 0; i < 101; i++ ){
  // res.write('<p>' + i + '</p>');
  // }
  res.end('\n</body></html>');
}).listen(8080);
