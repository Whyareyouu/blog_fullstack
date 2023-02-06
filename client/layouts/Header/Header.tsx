import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [token, setToken] = useState<string>('');
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (typeof token === 'string') {
			setToken(token);
		}
	}, []);
	console.log(token);
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
				<Link href='/auth/login' className={cn({ [styles.disabled]: token })}>
					Профиль
				</Link>
				<Link
					href='/profile'
					className={cn(styles.disabled, { [styles.profile_active]: token })}>
					Профиль
				</Link>
				<input
					type='text'
					placeholder='Поиск по блогу'
					className={styles.search}
				/>
			</div>
		</header>
	);
};
