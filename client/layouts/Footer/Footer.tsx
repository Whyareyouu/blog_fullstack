import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.scss';
export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			подвал
		</footer>
	);
};
