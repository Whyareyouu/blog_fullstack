import { LoginForm } from '@/components';
import { withLayout } from '@/layouts/Layout';

const Login = () => {
	return (
		<div>
			<LoginForm />
		</div>
	);
};

export default withLayout(Login);
