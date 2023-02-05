import { RegForm } from '@/components';
import { withLayout } from '@/layouts/Layout';

const Register = () => {
	return (
		<div>
			<RegForm />
		</div>
	);
};

export default withLayout(Register);
