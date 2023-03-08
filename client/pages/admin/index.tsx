import { CreatePost } from '@/components';
import { IPosts } from '@/Interfaces/Posts.interface';
import { IProfile } from '@/Interfaces/Profile.interface';
import { AdminPage } from '@/PageComponents';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import styles from '../../styles/Admin.module.scss';
const Admin = ({ users, posts }: AdminProps) => {
	console.log(users);
	return (
		<div className={styles.wrapper}>
			<CreatePost className={styles.createpost} />
			<AdminPage users={users} posts={posts} className={styles.users} />
		</div>
	);
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = context.req.cookies.token;
	if (!token) {
		return {
			notFound: true,
		};
	}
	const { data: profile } = await axios.get<IProfile>(
		'http://localhost:3001/auth/me',
		{
			headers: {
				Authorization: `${token}`,
			},
		}
	);
	if (profile.role !== 'admin') {
		return {
			notFound: true,
		};
	}
	const { data: users } = await axios.post<AdminProps[]>(
		'http://localhost:3001/admin/users',
		{
			role: profile.role,
		}
	);
	const { data: posts } = await axios.get<IPosts>(
		'http://localhost:3001/posts'
	);
	return {
		props: { profile, users, posts },
	};
};

interface AdminProps extends Record<string, unknown> {
	users: IProfile[];
	posts: IPosts[];
}
