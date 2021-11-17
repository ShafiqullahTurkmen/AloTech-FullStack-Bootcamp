//imports http and fs modules from core modules
const http = require('http');
const fs = require('fs');

//Creates a Server, which includes four pages with header and body contents
const server = http.createServer((req, res) => {

    //takes url info from request
    const url = req.url;

    //Reads html file contents and stores them into constants
    const indexFile = fs.readFileSync('./index.html');
    const aboutFile = fs.readFileSync('./about-us.html');
    const productFile = fs.readFileSync('./product.html');
    const contactFile = fs.readFileSync('./contact.html');

    //if the URL is '/' or index.html the following body will be executed
    if (url === '/' || url === '/index.html') {

        //Contents of head and body
        res.setHeader('Content-Type', 'text/html');
        res.end(indexFile);

    //if the URL is '/about-us.html' the following body will be executed
    } else if ( url === '/about-us.html') {

        //Contents of head and body
        res.setHeader('Content-Type', 'text/html');
        res.end(aboutFile);

    //if the URL is '/contact.html' the following body will be executed
    } else if (url === '/contact.html') {

        //Contents of head and body
        res.setHeader('Content-Type', 'text/html');
        res.end(contactFile);

    //if the URL is something else except '/index', '/about', and '/contant' the following body will be executed
    } else if (url === '/product.html') {

        //Contents of head and body
        res.setHeader('Content-Type', 'text/html');
        res.end(productFile);

    //if the URL is something else except '/', '/about', and '/contant' the following body will be executed
    } else {

        //Contents of head and body
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h2>404 Page is not found.</h2>');
        res.end();
    }
});

//port number 
const port = 5000;

//this method listens to port 5000
server.listen(port, () => {
    console.log(`Sunucu port ${port} de çalıştı`);
});
