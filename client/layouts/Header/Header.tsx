import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.scss';
import Link from 'next/link';
export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<nav className={styles.navbar}>
				<ul className={styles.list}>
					<li>
						<Link href='/'>Главная</Link>
					</li>
					<li>Статьи</li>
					<li>Обо мне</li>
				</ul>
			</nav>
			<div className={styles.profile}>
				<Link href='/auth/login'>Профиль</Link>
				<input
					type='text'
					placeholder='Поиск по блогу'
					className={styles.search}
				/>
			</div>
		</header>
	);
};
