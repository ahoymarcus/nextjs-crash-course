// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  //console.log(req.query);
	//console.log('Request Body = ', req.body);
	console.log('Request Body = ', req.body.username);
	
	// Headers
	res.setHeader('Content-type', 'text/plain');
	res.setHeader('XCustom-Header', 'we are open for lunch! :-)');
	
	// Set Cookie
	res.setHeader('Set-Cookie', 'areyouprogrammer=true');
	
	
	res.send('Hello-Goodbye');
}



/* SETTING COOKIE */	 
//document.cookie;
/* QUERY EXAMPLE */
//http://localhost:3000/api/random-number?query=surprise
/* FETCH EXAMPLE */
// fetch('http://localhost:3000/api/random-number', { 	method: 'POST' , 
	// headers: { 'Content-type': 'application/json' },
	// body: JSON.stringify({ 
		// user: 'Kato', password: 'admin' 
	// }) 
// });


