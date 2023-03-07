export interface IPosts {
	_id: string;
	title: string;
	text: string;
	tags: string[];
	viewsCount: number;
	user?: any;
	imageUrl: string;
	createdAt: string;
	updatedAt: Date;
	__v: number;
}
