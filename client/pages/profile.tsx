import { IProfile } from '@/Interfaces/Profile.interface';
import { withLayout } from '@/layouts/Layout';
import { ProfilePage } from '@/PageComponents';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import NotFoundPage from './NotFoundPage';

const Profile = ({ profile }: ProfileProps) => {
	return <>{profile ? <ProfilePage profile={profile} /> : <NotFoundPage />} </>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = context.req.cookies.token;
	const { data: profile } = await axios.get<IProfile>(
		'http://localhost:3001/auth/me',
		{
			headers: {
				Authorization: `${token}`,
			},
		}
	);

	return {
		props: { profile },
	};
};

interface ProfileProps extends Record<string, unknown> {
	profile: IProfile;
}

export default withLayout(Profile);
