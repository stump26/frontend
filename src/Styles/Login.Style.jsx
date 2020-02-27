import styled from 'styled-components';

export const LoginFrame = styled.div`
	display: flex;
	margin: auto;
	width: 100%;
	max-width: 1260px;
	height: 630px;
	border-radius: 5px;
	box-shadow: 40px 45px 57px 0 rgba(0, 0, 0, 0.07);
	background-color: #ffffff;
`;

export const LoginImageBackGround = styled.img.attrs(() => ({
	src: '/Login_bg.png',
}))`
	z-index: 999;
`;

export const LoginFormContainer = styled.div`
	display: flex;
	width: 480px;
	max-width: 480px;
	flex-direction: column;
	justify-content: center;
`;

export const LoginTitle = styled.div`
	font-family: NotoSansKR;
	font-size: 28px;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #000000;

	> div.textbold {
		font-weight: bold;
	}
`;
