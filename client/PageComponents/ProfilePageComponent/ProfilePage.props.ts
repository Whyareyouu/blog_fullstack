import { IProfile } from '@/Interfaces/Profile.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface ProfilePageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	profile: IProfile;
}
