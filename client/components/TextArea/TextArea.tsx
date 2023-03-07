import { ForwardedRef, forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.scss';
export const TextArea = forwardRef(
	({ ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
		return <textarea className={styles.textarea} ref={ref} {...props} />;
	}
);
TextArea.displayName = 'TextArea';
