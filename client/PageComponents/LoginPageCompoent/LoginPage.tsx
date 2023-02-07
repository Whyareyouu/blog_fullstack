import { LoginPageProps } from './LoginPage.props';
import cn from 'classnames';
import styles from './LoginPage.module.scss';
import { LoginForm } from '@/components';
import Link from 'next/link';
export const LoginPage = ({
	className,
	...props
}: LoginPageProps): JSX.Element => {
	return (
		<div className={cn(className, styles.LoginPage)} {...props}>
			<h1>Вход</h1>
			<p>
				Войдите в аккаунт или{' '}
				<Link href='./register' className={styles.createAcc}>
					создайте учетную запись
				</Link>
			</p>
			<LoginForm className={styles.LoginForm} />
		</div>
	);
};
