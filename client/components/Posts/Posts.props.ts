import { IPosts } from '@/Interfaces/Posts.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface PostsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	posts: IPosts[];
}
