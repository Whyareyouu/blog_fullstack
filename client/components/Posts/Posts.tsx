import { PostsProps } from './Posts.props';
import styles from './Posts.module.scss';
import { Post } from '../Post/Post';
export const Posts = ({ posts }: PostsProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			{posts.map((post) => (
				<Post post={post} key={post._id} />
			))}
		</div>
	);
};
