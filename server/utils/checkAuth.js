import jwt from 'jsonwebtoken';
export default (req, res, next) => {
	const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
	if (token) {
		try {
			const decoded = jwt.verify(token, 'zMCmwckLU325pgc&#Zds@asBN1520QHS@&');
			req.userId = decoded._id;
			next();
		} catch {
			return res.status(403).json({
				message: 'Нет доступа',
			});
		}
	} else {
		return res.status(403).json({
			message: 'Нет доступа',
		});
	}
};
