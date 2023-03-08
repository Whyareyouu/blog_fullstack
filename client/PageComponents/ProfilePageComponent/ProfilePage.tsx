import { ProfilePageProps } from './ProfilePage.props';
import styles from './ProfilePage.module.scss';
import Image from 'next/image';
import DefaultAvatar from './user.png';
import { Input } from '@/components';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/hooks/redux';
import { logout } from '@/redux/slices/token.slice';
export const ProfilePage = ({
	profile,
	className,
	...props
}: ProfilePageProps): JSX.Element => {
	const { username, email, avatarUrl, role } = profile;
	const dispatch = useAppDispatch();
	const router = useRouter();
	const handleLogOut = () => {
		dispatch(logout());
		router.push('/');
	};
	return (
		<div className={styles.profile} {...props}>
			<h1 className={styles.pageTitle}>Профиль</h1>
			<div className={styles.container}>
				<div className={styles.about}>
					<label htmlFor='username'>Никнейм</label>
					<Input value={username} disabled id='username' />
					<label htmlFor='email'>Эл. почта</label>
					<Input value={email} disabled id='email' />
					<label htmlFor='role'>Роль</label>
					<Input value={role} disabled id='role' />
					<button className={styles.logout} onClick={handleLogOut}>
						Выйти из аккаунта
					</button>
				</div>
				<div className={styles.avatar}>
					<Image
						src={
							avatarUrl ? `http://localhost:3001/${avatarUrl}` : DefaultAvatar
						}
						alt='user avatar'
						width={250}
						height={250}
					/>
					<button>Изменить аватар</button>
				</div>
			</div>
		</div>
	);
};
