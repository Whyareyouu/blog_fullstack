import styles from './LoginForm.module.scss';
import { LoginFormProps } from './LoginForm.props';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { useForm } from 'react-hook-form';
import { LoginInterface } from '@/Interfaces/Login.interface';
export const LoginForm = ({
	className,
	...props
}: LoginFormProps): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginInterface>();
	const onSubmit = (data: LoginInterface) => {
		console.log(data);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn(styles.form, className)}
			{...props}>
			<Input placeholder='Эл. почта' {...register('email')} type='email' />
			<Input placeholder='Пароль' {...register('password')} type='password' />
			<button className={styles.button}>Войти</button>
		</form>
	);
};
