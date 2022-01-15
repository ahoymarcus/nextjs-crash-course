// https://www.youtube.com/watch?v=tt3PUvhOVzo
//  1 hr  58'  20''
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import jwt from 'jsonwebtoken';

// styles
import styles from '../styles/home.module.scss';



export default function Home() {
  const [ username, setUsername ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');
	const [ message, setMessage ] = useState<string>('You are not logged in');
	const [ secret, setSecret ] = useState<strinng>('');
	const [ isHtmlElement, setIsHtmlElement ] = useState<string>('');
	
	
	console.log(isHtmlElement);
	
	
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
			
			const res = await fetch('/api/secret', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ token })
			}).then((t) => t.json());
			
			if (res.secretAdminCode) {
				setSecret(res.secretAdminCode);
			} else {
				setSecret('Nothing available');
			}
			
		} else {
			setMessage('Something went wrong');
		}
	};
	
	
	return (
   <div>
		<Head>
			<title>Next.js Crash Course</title>
		</Head>
		<h1>React-JS Form Style</h1>
		<h2>{message}</h2>
		<h3>Secret: {secret}</h3>
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
		<Link href="/html-forms/html-form-1">
			<a>HTML Form Style Test link</a>
		</Link>
		<h2>Let's play a Html game!</h2>
		<h3>Test is a word represents a HTML Element</h3>
		<input 
			type="text"
			value={isHtmlElement}
			placeholder="test to see if it's a HTML element"
			onChange={(e) => setIsHtmlElement(e.target.value)}
		/>
		<Link href={`/html-elements/${isHtmlElement}`}>
			<a>{isHtmlElement}</a>
		</Link>
	 </div>
  )
}



