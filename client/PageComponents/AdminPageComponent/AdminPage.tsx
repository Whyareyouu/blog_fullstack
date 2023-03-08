import { AdminPageProps } from './AdminPage.props';
import DeleteIcon from './close.svg';
import styles from './AdminPage.module.scss';
import cn from 'classnames';
import Image from 'next/image';
export const AdminPage = ({ posts, users, className }: AdminPageProps) => {
	return (
		<div className={cn(className, styles.wrapper)}>
			<div className={styles.tableWrapper}>
				<table>
					<thead>
						<tr>
							<th>Никнейм</th>
							<th>Почта</th>
							<th>Роль</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
								<td>
									<DeleteIcon
										className={styles.delete}
										width={25}
										height={25}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className={styles.posts}>
				<h2>Статьи</h2>
				{posts.map((post) => (
					<div key={post._id} className={styles.post}>
						<Image
							src={post.imageUrl}
							alt={post.title}
							className={styles.post__image}
							width={100}
							height={80}
						/>
						<h3>{post.title}</h3>
						<DeleteIcon className={styles.delete} width={30} height={30} />
					</div>
				))}
			</div>
		</div>
	);
};
