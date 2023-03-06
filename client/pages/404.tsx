import Image from 'next/image';
import Link from 'next/link';
import { HTMLProps } from 'react';
import NotFoundImagse from '../helpers/images/notfound.jpg';
import styles from '../styles/NotFoundPage.module.scss';

const NotFoundPage: React.FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => {
	return (
		<div className={styles.wrapper} {...props}>
			<Image src={NotFoundImagse} alt='PageNotFound' className={styles.image} />
			<h1>404 - Страница не найдена</h1>
			<p>Извините, такой страницы не существует.</p>
			<p>
				Вернуться на{' '}
				<Link href='/' className={styles.link}>
					главную страницу
				</Link>
			</p>
		</div>
	);
};
export default NotFoundPage;
