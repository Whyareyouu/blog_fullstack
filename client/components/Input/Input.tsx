import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.scss';
export const Input = forwardRef(
	(
		{ className, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<input className={cn(className, styles.input)} {...props} ref={ref} />
		);
	}
);
Input.displayName = 'Input';
