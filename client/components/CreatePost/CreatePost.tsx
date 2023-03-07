import styles from './CreatePost.module.scss';
import axios from 'axios';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import React from 'react';
import { ICreatePost } from '@/Interfaces/CreatePost.interface';
import { TextArea } from '../TextArea/TextArea';
import { CreatePostProps } from './CreatePost.props';

export const CreatePost = ({
	className,
	...props
}: CreatePostProps): JSX.Element => {
	const { register, handleSubmit } = useForm<ICreatePost>();
	const onSubmit = (data: ICreatePost) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn(styles.form, className)}
			{...props}>
			<p>Добавить статью</p>
			<Input placeholder='Заголовок статьи' {...register('title')} />
			<TextArea placeholder='Текст статьи' {...register('text')} />
			<Input placeholder='Картинка' {...register('imageUrl')} />
			<Input placeholder='Тэги' {...register('tags')} />
			<button className={styles.button}>Отправить статью</button>
		</form>
	);
};
