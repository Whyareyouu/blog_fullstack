import { PostsProps } from './Posts.props';
import styles from './Posts.module.scss';
import { Post } from '../Post/Post';
import { SpliceArray } from '@/helpers/helpers';
export const Posts = ({ posts }: PostsProps): JSX.Element => {
	const sortedArr = SpliceArray(posts, 0, 4);
	return (
		<div className={styles.wrapper}>
			{sortedArr.map((post) => (
				<Post post={post} key={post._id} />
			))}
		</div>
	);
};
