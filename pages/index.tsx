// https://www.youtube.com/watch?v=tt3PUvhOVzo
//  1 hr  12'  00''
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import jwt from 'jsonwebtoken';

// styles
import styles from '../styles/home.module.scss';



export default function Home() {
  const [ username, setUsername ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');
	const [ message, setMessage ] = useState<string>('You are not logged in');
	
	
	
	async function submitForm() {
		const res = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		}).then((t) => t.json());
		
		const token = res.token;
		
		if (token) {
			const json = jwt.decode(token) as { [key: string]: string};
			
			console.log(json);
			
			setMessage(`Welcome ${json.username} and you are ${json.admin ? ' an admin!' : ' not an admin!'}`);
		} else {
			setMessage('Something went wrong');
		}
	};
	
	
	return (
   <div>
		<h2>{message}</h2>
		<form>
			<input 
				type="text" 
				name="username" 
				value={username}
				placeholder="username"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input 
				type="password" 
				name="password" 
				value={password} 
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input type="button" value="Login" onClick={submitForm} />
		</form>
	 </div>
  )
}



