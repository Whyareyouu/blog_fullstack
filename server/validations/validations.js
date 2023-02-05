import { body } from 'express-validator';

export const registerValidation = [
	body('email', 'Почта введена некорректно').isEmail(),
	body('password', 'Пароль должен быть более 5 символов').isLength({ min: 5 }),
	body('username', 'Вы не указали ник').isLength({ min: 3 }),
	body('avatarUrl', 'Неверная ссылка на изображение').optional().isURL(),
];
export const loginValidtion = [
	body('email', 'Почта введена некорректно').isEmail(),
	body('password', 'Пароль должен быть более 5 символов').isLength({ min: 5 }),
];

export const postCreateValidtion = [
	body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
	body('text', 'Введите текст статьи').optional().isString(),
	body('tags', 'Неверный формат тэгов (укажите массив)').optional().isArray(),
	body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
