import { PostsProps } from './Posts.props';
import styles from './Posts.module.scss';
import { Post } from '../Post/Post';
import { SliceArray } from '@/helpers/helpers';
import { useState } from 'react';
import cn from 'classnames';
export const Posts = ({ posts }: PostsProps): JSX.Element => {
	const [page, setPage] = useState<number>(0);
	const length = Math.ceil(posts.length / 4);
	const controlPages = new Array(length).fill(1);
	const sortedArr = SliceArray(posts, page, 3);
	return (
		<div className={styles.wrapper}>
			{sortedArr.map((post) => (
				<Post post={post} key={post._id} />
			))}
			<div className={styles.controlPages}>
				<button disabled={page === 0} onClick={() => setPage(page - 1)}>
					{'<'}
				</button>
				{controlPages.map((_, index) => (
					<button
						key={index}
						onClick={() => setPage(index)}
						className={cn({ [styles.active]: index === page })}>
						{index + 1}
					</button>
				))}
				<button
					disabled={page + 1 === length}
					onClick={() => setPage(page + 1)}>
					{'>'}
				</button>
			</div>
		</div>
	);
};
