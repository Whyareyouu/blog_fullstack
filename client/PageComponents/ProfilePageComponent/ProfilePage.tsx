import { ProfilePageProps } from './ProfilePage.props';
import styles from './ProfilePage.module.scss';
import Image from 'next/image';
import DefaultAvatar from './user.png';
import { Input } from '@/components';
import { useRouter } from 'next/router';
export const ProfilePage = ({
	profile,
	className,
	...props
}: ProfilePageProps): JSX.Element => {
	const { username, email, avatarUrl } = profile;
	const router = useRouter();
	const handleLogOut = () => {
		localStorage.removeItem('token');
		router.push('/');
	};
	return (
		<div className={styles.profile} {...props}>
			<h1 className={styles.pageTitle}>Профиль</h1>
			<div className={styles.container}>
				<div className={styles.about}>
					<Input value={username} disabled />
					<Input value={email} disabled />
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
