import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { LoginForm } from 'components/Login';
import { LoginFrame, LoginImageBackGround } from 'Styles/Login.Style';

const Login = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	return (
		<LoginFrame>
			<LoginForm />
			{!isMobile && <LoginImageBackGround />}
		</LoginFrame>
	);
};

export default Login;
