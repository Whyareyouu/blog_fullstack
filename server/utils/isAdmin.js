export default (req, res, next) => {
	if (req.body && req.body.role === 'admin') {
		next();
	} else {
		res.status(403).send('Доступ запрещен');
	}
};
