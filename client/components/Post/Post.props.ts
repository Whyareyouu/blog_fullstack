import { IPosts } from '@/Interfaces/Posts.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface PostProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	post: IPosts;
}
