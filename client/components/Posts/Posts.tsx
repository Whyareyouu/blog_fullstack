import Image from 'next/image';
import { PostsProps } from './Posts.props';
export const Posts = ({}: PostsProps): JSX.Element => {
	return (
		<div>
			<Image src='' alt='' />
			<h2></h2>
			<p></p>
			<div>
				<p>date</p>
				<p>tags</p>
				<p>read</p>
			</div>
		</div>
	);
};
