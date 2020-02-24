import React from 'react';
import styled, { css } from 'styled-components';

const ButtonFrame = styled.div`
	display: flex;
	flex-direction: row;
	height: 46px;
	margin: 0 20px;
	margin-bottom: 20px;
`;

const ButtonItemActive = css`
	border-radius: 5px;
	border: solid 1px #00df9b;
	background-color: #e7fff8;
	color: #00d493;
`;

const ButtonItem = styled.button`
	width: 100%;
	outline: 0;
	height: 100%;
	justify-content: center;
	font-size: 14px;
	font-weight: bold;

	${(props) =>
		props.select
			? ButtonItemActive
			: `border-radius: 5px;
        border: solid 1px #e6e6e6;
        background-color: #ffffff;
        color: #666666;
        `};
`;

const YesOrNoButton = () => {
	const handleClick = (e) => {
		console.log('TCL: handleClick -> e', e);
	};
	return (
		<ButtonFrame>
			<ButtonItem onClick={handleClick} select>
				네, 있어요
			</ButtonItem>
			<ButtonItem>아뇨, 없어요</ButtonItem>
		</ButtonFrame>
	);
};

export default YesOrNoButton;
