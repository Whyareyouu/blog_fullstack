import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.scss';
export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<nav className={styles.navbar}>
				<ul className={styles.list}>
					<li>Главная</li>
					<li>Статьи</li>
					<li>Обо мне</li>
				</ul>
			</nav>
			<div className={styles.profile}>
				<span>Профиль</span>
				<input
					type='text'
					placeholder='Поиск по блогу'
					className={styles.search}
				/>
			</div>
		</header>
	);
};
