import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';




const htmlElements = [
	'html',
	'head',
	'title',
	'meta',
	'link',
	'script',
	'style',
	'body',
	'div',
	'ul',
	'ol',
	'li',
	'select',
	'option',
	'input',
	'area',
	'header',
	'main',
	'article',
	'aside',
	'nav',
	'section',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'p',
	'pre',
	'hr',
	'br',
	'a',
	'em',
	'i',
	'strong',
	'img',
	'audio',
	'video',
	'footer',
	'svg',
	'canvas',
	'button'
];
const words = [...htmlElements, 'arm', 'leg', 'biceps', 'newspaper', 'log', 'directory', 'document', 'application', 'history', 'element', 'h7', 'weak'];

export default function HtmlElements() {
	const router = useRouter();
	//console.log('router', router);
	
	//let params = router.query.elements;
	console.log('router params = ', router.query.elements);
	
	
	const [ params, setParams ] = useState<string>('');
	const [ input, setInput ] = useState<string>('');
	const [ word, setWord ] = useState<string>('');
	const [ isHtml, setIsHtml ] = useState<string>(null);
	const [ guess, setGuess ] = useState<boolean>('');
	
	console.log('word = ', word);
	//console.log('isHtml = ', isHtml);
	
	
	
	useEffect(() => {
		if (router.query.elements && !words) {
			
			setWord(router.query.elements);
			return;
		} 
		
		const randomWord = words[Math.ceil(Math.random() * words.length -1)];
		
		setWord(randomWord);
	}, [word, guess]);
	
	
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






