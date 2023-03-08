export interface LoginInterface {
	email: string;
	password: string;
}
export interface LoginResponse {
	_id: string;
	username: string;
	email: string;
	avatarUrl?: string;
	createdAt: Date;
	updatedAt: Date;
	role: string;
	__v: number;
	token: string;
}
