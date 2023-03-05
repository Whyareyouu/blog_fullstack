import styles from './CreatePost.module.scss';
import axios from 'axios';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import React from 'react';
import { ICreatePost } from '@/Interfaces/CreatePost.interface';

export const CreatePost = (): JSX.Element => {
	const { register, handleSubmit } = useForm<ICreatePost>();
	const onSubmit = (data: ICreatePost) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input placeholder='Заголовок статьи' {...register('title')} />
			<Input placeholder='Текст' {...register('text')} />
			<Input placeholder='Картинка' {...register('imageUrl')} />
			<Input placeholder='Тэги' {...register('tags')} />
		</form>
	);
};
