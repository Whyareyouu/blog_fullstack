import { CreatePost } from '@/components';
import styles from '../../styles/Admin.module.scss';
const Admin = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<CreatePost />
			</div>
		</div>
	);
};

export default Admin;
