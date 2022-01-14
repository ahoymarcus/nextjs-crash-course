import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';



const KEY = 'dfsdlkekrekxkfjskfjsdkfjdfdfdf';

export default function(req: NextApiRequest, res: NextApiResponse) {
	if (!req.body) {
		res.statusCode = 404;
		res.end('Error');
		return;
	}
	console.log('REQUEST BODY = ', req.body);
	
	const { username, password } = req.body;
	
	res.status(200).json({
		token: jwt.sign(
			{
				username,
				admin: username === 'admin' && password === 'admin'
			},
			KEY
		)
	});
};





