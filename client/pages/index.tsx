import { Tag } from '@/components';
import { withLayout } from '@/layouts/Layout';
import Head from 'next/head';

function Home() {
	return (
		<>
			<Head>
				<title>CatBlog</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
			</Head>
			<Tag />
		</>
	);
}

export default withLayout(Home);
