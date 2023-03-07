import Image from 'next/image';
import { PostProps } from './Post.props';
import styles from './Post.module.scss';
export const Post = ({ post }: PostProps): JSX.Element => {
	const { imageUrl, title, text, tags, createdAt } = post;
	const lines = text.split('\n');
	const date = createdAt.replace(/^(\d{4}-\d{2}-\d{2}).*$/, '$1');
	return (
		<div className={styles.post__wrapper}>
			<Image src={imageUrl} alt={title} width={420} height={320} />
			<div className={styles.post__body}>
				<h2>{title}</h2>
				<div className={styles.post__text}>{lines[0]}..</div>
				<div className={styles.post__info}>
					<div className={styles.post__date}>
						<p>{date}</p>
						<p>{tags}</p>
					</div>
					<p className={styles.post__read}>читать дальше</p>
				</div>
			</div>
		</div>
	);
};
