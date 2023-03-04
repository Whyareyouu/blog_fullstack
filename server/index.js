import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import {
	registerValidation,
	loginValidtion,
	postCreateValidtion,
} from './validations/validations.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';
import handleValidationErrors from './utils/handleValidationErrors.js';
import cors from 'cors';
mongoose
	.connect(process.env.DB_LINK)
	.then(() => {
		console.log('DB ok');
	})
	.catch((err) => {
		console.log('DB error', err);
	});

const app = express();

const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads');
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname);
	},
});
const PORT = process.env.PORT || 3001;
const upload = multer({ storage });
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post(
	'/auth/login',
	loginValidtion,
	handleValidationErrors,
	UserController.login
);
app.post(
	'/auth/register',
	registerValidation,
	handleValidationErrors,
	UserController.register
);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	});
});

app.get('/posts', PostController.getAll);
app.post(
	'/posts',
	checkAuth,
	postCreateValidtion,
	handleValidationErrors,
	PostController.create
);
app.get('/posts/:id', PostController.getOne);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch(
	'/posts/:id',
	checkAuth,
	postCreateValidtion,
	handleValidationErrors,
	PostController.update
);

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log('Server ok');
});
