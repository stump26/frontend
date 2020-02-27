import styled from 'styled-components';
import mainUI from './UI.Style';

export const LoginFrame = styled.div`
	display: flex;
	position: relative;
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
	position: absolute;
	right: 0;
	display: block;
	z-index: 1;
	object-fit: cover;
	background-repeat: no-repeat;
	height: inherit;
`;

export const LoginFormContainer = styled.div`
	position: relative;
	display: flex;
	flex-shrink: 0;
	z-index: 999;
	min-width: 480px;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #ffffff;
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

export const LoginInputForms = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const FormTextField = styled(mainUI.FormTextField).attrs(({ placeholder }) => ({
	type: 'text',
	placeholder: placeholder || '',
}))`
	position: relative;
	width: ${(props) => props.width || 'calc(340px - 1em)'};
	height: 46px;
	margin: 10px 0;
	padding-left: 1em;
	font-size: 14px;
`;

export const LoginBtnGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-items: center;
	align-items: center;
`;

export const LoginButton = styled.div`
	width: 340px;
	padding: 14px 0;
	border-radius: 1px;
	background-color: #3e3e3e;
	font-family: NotoSansKR;
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	color: #ffffff;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

export const SignUpButton = styled.div`
	width: 340px;
	padding: 14px 0;
	border-radius: 5px;
	background-color: #b0b5bb;
	font-family: NotoSansKR;
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	color: #ffffff;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
