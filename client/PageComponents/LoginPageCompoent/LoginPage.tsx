import { LoginPageProps } from './LoginPage.props';
import cn from 'classnames';
import styles from './LoginPage.module.scss';
import { LoginForm } from '@/components';
export const LoginPage = ({
	className,
	...props
}: LoginPageProps): JSX.Element => {
	return (
		<div className={cn(className, styles.LoginPage)} {...props}>
			<h1>Вход</h1>
			<p>Войдите в аккаунт или создайте учетную запись</p>
			<LoginForm className={styles.LoginForm} />
		</div>
	);
};
