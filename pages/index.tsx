// https://www.youtube.com/watch?v=tt3PUvhOVzo
//  1 hr  12'  00''
import Head from 'next/head'
import Image from 'next/image'

// styles
import styles from '../styles/home.module.scss';



 
export default function Home() {
  return (
   <h1 className={styles.title}><span>I'm a blue</span> Hello World</h1>
  )
}



