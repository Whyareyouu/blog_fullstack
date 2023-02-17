export interface Posts {
	_id: string;
	title: string;
	text: string;
	tags: string[];
	viewsCount: number;
	user?: any;
	imageUrl?: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}
