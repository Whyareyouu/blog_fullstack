import Image from 'next/image';
import { PostProps } from './Post.props';
import styles from './Post.module.scss';
export const Post = ({ post }: PostProps): JSX.Element => {
	const { imageUrl, title, text, tags } = post;
	const lines = text.split('\n');
	console.log(text);
	return (
		<div className={styles.post__wrapper}>
			<Image src={imageUrl} alt={title} width={720} height={520} />
			<div className={styles.post__body}>
				<h2>{title}</h2>
				<div className={styles.post__text}>
					{lines.map((line, index) => (
						<p key={index}>{line}</p>
					))}
				</div>
				<div className={styles.post__info}>
					<div className={styles.post__date}>
						<p>date</p>
						<p>{tags}</p>
					</div>
					<p>read</p>
				</div>
			</div>
		</div>
	);
};
