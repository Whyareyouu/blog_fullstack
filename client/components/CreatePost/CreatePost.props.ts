import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
export interface CreatePostProps
	extends DetailedHTMLProps<
		FormHTMLAttributes<HTMLFormElement>,
		HTMLFormElement
	> {
	role: string;
}
