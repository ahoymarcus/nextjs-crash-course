// http://localhost:3000/api/random-number
import { NextApiRequest, NextApiResponse } from 'next';



export default function (req: NextApiRequest, res: NextApiResponse) {
	return res.status(200).json({ number: Math.floor(Math.random() * 11) });
};



