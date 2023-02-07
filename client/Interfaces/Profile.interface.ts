export interface IProfile {
	_id: string;
	username: string;
	email: string;
	avatarUrl?: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}
