import React from 'react';

import {
	LoginFormContainer,
	LoginTitle,
	LoginInputForms,
	FormTextField,
	LoginBtnGroup,
	LoginButton,
	SignUpButton,
} from 'Styles/Login.Style';
import styled from 'styled-components';

const HrDivider = ({ text, width, margin }) => {
	const Frame = styled.div`
		display: flex;
		flex-direction: row;
		width: 100%;
		max-width: ${width};
		margin: ${margin} 0;
		margin-bottom: ${parseInt(margin) + 10}px;
		justify-content: space-between;
		> span {
			display: block;
			position: relative;
			top: -3px;
			text-align: center;
			flex-basis: 10%;
			color: #b3b3b3;
		}
	`;
	const Line = styled.hr`
		height: 0;
		margin-left: 0;
		margin-right: 0;
		flex-basis: 40%;
		border: 1px solid #ededed;
	`;
	return (
		<Frame>
			<Line /> <span>{text}</span> <Line />
		</Frame>
	);
};

const LoginForm = () => {
	return (
		<LoginFormContainer>
			<LoginTitle>
				<div className="textbold">Hello :)</div>
				Welcome to be here!
			</LoginTitle>
			<LoginInputForms>
				<FormTextField placeholder="아이디 / 이메일을 입력하세요" />
				<FormTextField placeholder="비밀번호를 입력하세요" />
			</LoginInputForms>
			<LoginBtnGroup>
				<LoginButton>로그인</LoginButton>
				<HrDivider text="or" width="340px" margin="20px" />
				<SignUpButton>회원가입</SignUpButton>
			</LoginBtnGroup>
		</LoginFormContainer>
	);
};

export default LoginForm;
