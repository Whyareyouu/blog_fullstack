import styles from './CreatePost.module.scss';
import axios from 'axios';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import React from 'react';
import { ICreatePost } from '@/Interfaces/CreatePost.interface';
import { TextArea } from '../TextArea/TextArea';
import { CreatePostProps } from './CreatePost.props';
import Cookies from 'js-cookie';

export const CreatePost = ({
	role,
	className,
	...props
}: CreatePostProps): JSX.Element => {
	const { register, handleSubmit } = useForm<ICreatePost>();
	const onSubmit = async (formState: ICreatePost) => {
		const token = Cookies.get('token');
		const tags = formState.tags.split(',');
		const data = { ...formState, tags, role };
		const req = await axios.post<ICreatePost>(
			'http://localhost:3001/posts',
			data,
			{
				headers: {
					Authorization: `${token}`,
					'Content-Type': 'application/json',
				},
			}
		);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn(styles.form, className)}
			{...props}>
			<p>Добавить статью</p>
			<Input placeholder='Заголовок статьи' {...register('title')} />
			<TextArea placeholder='Текст статьи' {...register('text')} />
			<Input placeholder='Тэги' {...register('tags')} />
			<Input placeholder='Картинка' {...register('imageUrl')} />
			<button className={styles.button}>Отправить статью</button>
		</form>
	);
};
