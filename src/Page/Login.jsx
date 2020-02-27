import React from 'react';

import { LoginForm } from 'components/Login';
import { LoginFrame, LoginImageBackGround } from 'Styles/Login.Style';

const Login = () => {
	return (
		<LoginFrame>
			<LoginForm />
			<LoginImageBackGround />
		</LoginFrame>
	);
};

export default Login;
