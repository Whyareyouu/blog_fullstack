import { withLayout } from '@/layouts/Layout';
import { LoginPage } from '@/PageComponents';

const Login = () => {
	return (
		<div>
			<LoginPage />
		</div>
	);
};

export default withLayout(Login);
