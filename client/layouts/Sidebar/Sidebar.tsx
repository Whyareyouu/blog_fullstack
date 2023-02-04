import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import background from './background.png';
import shelby from './shelby.jpg';
import Image from 'next/image';
export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(styles.Sidebar, className)} {...props}>
			<div className={styles.sidebar__images}>
				<Image src={background} alt='background' width={300} height={180} />
				<Image
					src={shelby}
					alt='avatar'
					className={styles.avatar}
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.about}>
				<p className={styles.about__name}>Шелби Мурмуровна</p>
				<span className={styles.about__post}>Самый милый котик в Королеве</span>
				<div className={styles.about__socials}></div>
			</div>
			<div className={styles.description}>
				Данный проект посвящен кошке Шелби.
			</div>
			<div className={styles.links}>
				<a href='#'>Мои фотографии</a>
				<a href='#'>Задать вопрос</a>
			</div>
		</div>
	);
};
