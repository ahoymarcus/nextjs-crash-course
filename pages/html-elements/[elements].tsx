import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';




const htmlElements = [
	'html',
	'head',
	'title',
	'meta',
	'link',
	'script',
	'style',
	'body',
	'header',
	'main',
	'footer'
];
const words = [...htmlElements, 'arm', 'leg', 'biceps', 'newspaper', 'log', 'directory', 'document', 'application', 'history', 'element'];

export default function HtmlElements() {
	const [ input, setInput ] = useState<string>('');
	const [ word, setWord ] = useState<string>('');
	const [ isHtml, setIsHtml ] = useState<string>(null);
	const [ guess, setGuess ] = useState<boolean>('');
	
	
	
	
	console.log('isHtml = ', isHtml);
	
	useEffect(() => {
		const randomWord = words[Math.ceil(Math.random() * words.length -1)];
		
		setWord(randomWord);
	}, [guess]);
	
	
	const renderResult = () => {
		if (guess === '') {
			return <p>Good lucky</p>;
		} 
		if (guess.toLowerCase() === 'true' && htmlElements.includes(isHtml.toLowerCase())) {
			console.log('guess = ', guess);
			console.log('isHtml = ', htmlElements.includes(isHtml.toLowerCase()));
			
			return <p>Correct</p>;
		} 
		if (guess.toLowerCase() === 'false' && htmlElements.includes(isHtml.toLowerCase())) {
			console.log('guess = ', guess);
			console.log('isHtml = ', htmlElements.includes(isHtml.toLowerCase()));
			
			return <p>Wrong</p>;
		}
		if (guess.toLowerCase() === 'false' && !htmlElements.includes(isHtml.toLowerCase())) {
			console.log('guess = ', guess);
			console.log('isHtml = ', htmlElements.includes(isHtml.toLowerCase()));
			
			return <p>Correct</p>;
		}  
		if (guess.toLowerCase() === 'true' && !htmlElements.includes(isHtml.toLowerCase())) {
			console.log('guess = ', guess);
			console.log('isHtml = ', htmlElements.includes(isHtml.toLowerCase()));
			
			return <p>Wrong</p>;
		}
	};
	
	const handleSubmit = () => {
		if (input !== '') {
			
			/*
				Problema: ao fazer setGuess() a palavra a ser comparada muda antes da obtenção do resultado!!!!!!!
			*/
			setIsHtml(word);
			
			setGuess(input);
			setInput('');
		}
	};
	
	
	return (
		<div>
			<Head>
				<title>HTML Elements</title>
			</Head>
			<h1>HTML Elements</h1>
			<h2>Try to Guess if it is a HTML element</h2>
			<h3>
				--> {word}
			</h3>
			<input 
				type="text"
				value={input}
				placeholder="true or false"
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleSubmit}>Let's try</button>
			<h3>
				{renderResult()}
			</h3>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</div>
	);
};






