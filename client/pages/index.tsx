import { Posts } from '@/components';
import { IPosts } from '@/Interfaces/Posts.interface';
import { withLayout } from '@/layouts/Layout';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

function Home({ posts }: ProfileProps) {
	return (
		<>
			<Head>
				<title>CatBlog</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
			</Head>
			<Posts posts={posts} />
		</>
	);
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps = async () => {
	const { data: posts } = await axios.get<IPosts>(
		'http://localhost:3001/posts'
	);
	return {
		props: { posts },
	};
};

interface ProfileProps extends Record<string, unknown> {
	posts: IPosts[];
}
