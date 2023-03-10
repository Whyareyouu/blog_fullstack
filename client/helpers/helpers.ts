import { IPosts } from '@/Interfaces/Posts.interface';

export const SliceArray = (
	posts: IPosts[],
	index: number = 0,
	step: number = 4
) => {
	const length = posts.length;
	const currentPage = (index + 1) * step;
	const splicedArray = posts.slice(
		index * step,
		currentPage > length ? length : currentPage
	);
	return splicedArray;
};
