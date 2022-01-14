import Head from 'next/head'
import Link from 'next/link';

// styles
import styles from '../styles/home.module.scss';



 
export default function Home() {
  return (
   <div>
		<Head>
			<title>HTML Form Style</title>
		</Head>
		<h1>HTML Form Style</h1>
		<form method="POST" action="/api/login">
			<input type="text" name="username" defaultValue="admin" />
			<input type="password" name="password" defaultValue="admin" />
			<input type="submit" value="Login" />
		</form>
		<Link href="/">
			<a>Back to Home</a>
		</Link>
	 </div>
  )
}






