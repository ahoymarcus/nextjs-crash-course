import { GetStaticProps } from 'next';



/*
	This function will be executed first ON THE SERVER, the Props values will be caught and will be injected in the component.....
*/
export const getStaticProps: GetStaticProps = async context => {
	return {
		props: {
			myFavNum: 4
		}
	};
};


export default function Dynamic(props) {
	
	return <h1>Dynamic data - {props.myFavNum}</h1>;
};



