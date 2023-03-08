import { IPosts } from '@/Interfaces/Posts.interface';
import { IProfile } from '@/Interfaces/Profile.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AdminPageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	users: IProfile[];
	posts: IPosts[];
}
