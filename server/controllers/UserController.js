import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import Usermodel from '../models/User.js';
export const register = async (request, response) => {
	try {
		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).json(errors.array());
		}
		const password = request.body.password;

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		const doc = new Usermodel({
			email: request.body.email,
			username: request.body.username,
			avatarUrl: request.body.avatarUrl,
			passwordHash: hash,
		});

		const user = await doc.save();

		const token = jwt.sign(
			{
				_id: user._id,
			},
			'zMCmwckLU325pgc&#Zds@asBN1520QHS@&',
			{
				expiresIn: '30d',
			}
		);
		const { passwordHash, ...userData } = user._doc;
		response.json({
			...userData,
			token,
		});
	} catch (error) {
		console.log(error);
		response.status(500).json({
			message: 'Не удалось зарегистрироваться',
		});
	}
};

export const login = async (request, response) => {
	try {
		const user = await Usermodel.findOne({
			email: request.body.email,
		});

		if (!user) {
			return response.status(404).json({
				message: 'Пользователь не найден',
			});
		}

		const isValidPasword = await bcrypt.compare(
			request.body.password,
			user._doc.passwordHash
		);

		if (!isValidPasword) {
			return response.status(400).json({
				message: 'Неверный логин или пароль',
			});
		}

		const token = jwt.sign(
			{
				_id: user._id,
			},
			'zMCmwckLU325pgc&#Zds@asBN1520QHS@&',
			{
				expiresIn: '30d',
			}
		);
		const { passwordHash, ...userData } = user._doc;
		response.json({
			...userData,
			token,
		});
	} catch (error) {
		console.log(error);
		response.status(500).json({
			message: 'Не удалось авторизоваться',
		});
	}
};

export const getMe = async (request, response) => {
	try {
		const user = await Usermodel.findById(request.userId);
		if (!user) {
			return response.status(404).json({
				message: 'Пользователь не найден',
			});
		}
		const { passwordHash, ...userData } = user._doc;
		response.json({
			...userData,
		});
	} catch (error) {
		console.log(error);
		response.status(500).json({
			message: 'Нет доступа',
		});
	}
};
