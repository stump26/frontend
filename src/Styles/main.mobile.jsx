import styled from 'styled-components';

export const PageHeadSpan = styled.span`
	position: relative;
	display: inline-block;
	width: 100%;
	font-size: 28px;
	font-weight: 900;
	padding-left: 0.5em;
	padding-top: 0.5rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #e6e6e6;
`;

export const PageBody = styled.div`
	background-color: #ffffff;
`;

export const ContainerFrame = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
`;

export const ContainerTitle = styled.span`
	margin: 10px 0;
	font-size: 18px;
	font-weight: 900;
`;

export const ContainerSubTitle = styled.span`
	margin: 10px 0;
	font-size: 14px;
	font-weight: 900;
`;

export const FormTextField = styled.input`
	height: 46px;
	background-color: #f7f7f7;
	margin-bottom: 20px;
	padding-left: 1em;
	font-size: 14px;
	border-radius: 5px;
	border: solid 1px #e6e6e6;
	color: #b3b3b3;
	:focus {
		border: solid 1px #00df9b;
		background-color: #ffffff;
		color: #000000;
		outline: none;
	}
`;
