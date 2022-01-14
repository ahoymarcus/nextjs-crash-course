import Head from 'next/head'
import Image from 'next/image'

// styles
import styles from '../styles/home.module.scss';



 
export default function Home() {
  return (
   <div>
		<form method="POST" action="/api/login">
			<input type="text" name="username" defaultValue="admin" />
			<input type="password" name="password" defaultValue="admin" />
			<input type="submit" value="Login" />
		</form>
	 </div>
  )
}






