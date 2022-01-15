import { useRouter } from 'next/router';



export default function Hello() {
	const router = useRouter();
	
	console.log('router.query = ', router.query);
	
	return <h1>Hello to All!</h1>;
};


