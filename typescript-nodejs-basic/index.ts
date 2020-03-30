import http from 'http';
http.createServer((request, Response) =>{
    Response.end('Hellow');
}).listen(5000, ()=>console.log("servert started"));


