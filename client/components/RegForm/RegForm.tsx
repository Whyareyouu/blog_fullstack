import styles from './RegForm.module.scss';
import { RegFormProps } from './RegForm.props';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { useForm } from 'react-hook-form';
import {
	Registerinterface,
	RegisterInterfaceResponse,
} from '@/Interfaces/Register.interface';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
export const RegForm = ({ className, ...props }: RegFormProps): JSX.Element => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isError, setIsError] = useState<string>('');
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid, isSubmitting },
		reset,
	} = useForm<Registerinterface>();
	const onSubmit = async (formState: Registerinterface) => {
		try {
			const data = await axios.post<RegisterInterfaceResponse, any>(
				'http://localhost:3001/auth/register',
				{
					...formState,
				}
			);
			if (!data.message) {
				setIsSuccess(true);
				reset();
				setTimeout(() => router.push('/auth/login'), 1500);
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
			<Input placeholder='Никнейм' {...register('username')} type='text' />
			<Input placeholder='Эл. почта' {...register('email')} type='email' />
			<Input placeholder='Пароль' {...register('password')} type='password' />
			<button className={styles.button} disabled={isSubmitting}>
				Зарегистрироваться
			</button>
			<span className={styles.error}>{isError}</span>
			<span className={cn(styles.success, { [styles.disabled]: !isSuccess })}>
				Спасибо за регистрацию!
			</span>
		</form>
	);
};
