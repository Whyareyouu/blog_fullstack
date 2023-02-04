import { body } from 'express-validator';

export const registerValidation = [
	body('email', 'Почта введена некорректно').isEmail(),
	body('password', 'Пароль должен быть более 5 символов').isLength({ min: 5 }),
	body('username', 'Вы не указали ник').isLength({ min: 3 }),
	body('avatarUrl', 'Неверная ссылка на изображение').optional().isURL(),
];
