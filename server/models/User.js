import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		passwordHash: {
			type: String,
			required: true,
		},
		avatarUrl: String,
		role: { type: String, enum: ['guest', 'user', 'admin'], default: 'guest' },
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('User', UserSchema);
