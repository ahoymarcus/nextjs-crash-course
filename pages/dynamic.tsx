import { GetStaticProps } from 'next';
import path from 'path';



/*
	This function will be executed first ON THE SERVER, the Props values will be caught and will be injected in the component.....
*/
export const getStaticProps: GetStaticProps = async (context) => {
	
	const fs = require('fs');
	const txt = fs.readFileSync(
		path.join(process.cwd(), 'public/myWeirdRobots.txt'),
		'utf8'
	);
	
	
	/*
		getStaticProps always runs at development, but at production it's possible to set a value as REVALIDATE to bring the server to try to reconstruct this page in intervals  for data that changes less frequently.....
	*/
	return {
		revalidate: 10,
		props: {
			myFavNum: 4,
			myWeirdRobot: txt
		}
	};
};


export default function Dynamic(props) {
	
	return (
		<div>
			<h1>Dynamic data</h1>
			<h3>My favorite number - {props.myFavNum}</h3>
			<h3>My weird robots.txt - <span>{props.myWeirdRobot}</span></h3>
		</div>
	);
};



