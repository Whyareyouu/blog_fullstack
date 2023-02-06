import styles from './LoginForm.module.scss';
import { LoginFormProps } from './LoginForm.props';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { useForm } from 'react-hook-form';
import { LoginInterface, LoginResponse } from '@/Interfaces/Login.interface';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LoginActions } from '@/redux/slices/login.slice';
import { useState } from 'react';
import { useRouter } from 'next/router';
export const LoginForm = ({
	className,
	...props
}: LoginFormProps): JSX.Element => {
	const router = useRouter();
	const [isError, setIsError] = useState<string>('');
	const [isSuccess, setisSuccess] = useState<boolean>(false);
	const dispatch = useDispatch();
	if (isSuccess) {
		setTimeout(() => {
			router.push('/profile');
		}, 1000);
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginInterface>({ mode: 'onBlur' });
	const onSubmit = async (formState: LoginInterface) => {
		try {
			const data = await axios.post<LoginResponse>(
				'http://localhost:3001/auth/login',
				{
					...formState,
				}
			);
			if (data.data) {
				dispatch(LoginActions.addUserData(data.data));
				localStorage.setItem('token', data.data.token);
				setisSuccess(true);
				reset();
			}
		} catch (err: any) {
			setIsError(err.response.data.message);
		}
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn(styles.form, className)}
			{...props}>
			<Input
				placeholder='Эл. почта'
				{...register('email', {
					required: {
						value: true,
						message: 'Поле почта обязательно',
					},
				})}
				type='email'
			/>
			<span className={cn(styles.disabled, { [styles.error]: errors.email })}>
				{errors.email?.message}
			</span>
			<Input
				placeholder='Пароль'
				{...register('password', {
					required: {
						value: true,
						message: 'Поле пароль обязательно',
					},
					minLength: {
						value: 5,
						message: 'Ваш пароль меньше 5 символов',
					},
				})}
				type='password'
			/>
			<span
				className={cn(styles.disabled, { [styles.error]: errors.password })}>
				{errors.password?.message}
			</span>
			<span className={cn(styles.error, { [styles.disabled]: !isError })}>
				{isError}
			</span>
			<button className={styles.button}>Войти</button>
			<span className={cn(styles.disabled, { [styles.success]: isSuccess })}>
				Вы успешно зашли в аккаунт
			</span>
		</form>
	);
};
