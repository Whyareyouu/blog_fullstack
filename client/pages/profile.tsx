import { IProfile } from '@/Interfaces/Profile.interface';
import { withLayout } from '@/layouts/Layout';
import { ProfilePage } from '@/PageComponents';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = () => {
	const [profileData, setProfileData] = useState<IProfile>();
	useEffect(() => {
		try {
			const token = localStorage.getItem('token');
			if (typeof token === 'string') {
				const profile = axios
					.get<IProfile>('http://localhost:3001/auth/me', {
						headers: {
							Authorization: `${token}`,
						},
					})
					.then((res) => setProfileData(res.data));
			}
		} catch (err) {
			console.log(err);
		}
	}, []);
	return <>{profileData && <ProfilePage profile={profileData} />} </>;
};

export default withLayout(Profile);
