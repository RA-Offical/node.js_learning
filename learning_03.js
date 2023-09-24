const http = require("http");

const server = http.createServer((req, res) => {
	// console.log(req);
	// res.write("Welcome to homepage");
	// res.end();

	if (req.url === "/") {
		res.end("Welcome to our homepage");
	} else if (req.url === "/about") {
		res.end("Here is our short history");
	} else {
		res.end(`
            <h1>Opps</h1>
            <p>We cannot find, what are you looking for</p> 
            <a href="/">Back Home</a>    
    `);
	}
});

server.listen(5000);
