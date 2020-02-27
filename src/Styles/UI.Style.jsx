import styled from 'styled-components';

export const FormTextField = styled.input.attrs(() => ({
	type: 'text',
}))`
	position: relative;
	background-color: #f7f7f7;
	border-radius: 5px;
	border: solid 1px #e6e6e6;
	color: #000000;

	::placeholder {
		color: #b3b3b3;
	}
	:active {
		background-color: #ffffff;
	}
	:focus {
		border: solid 1px #00df9b;
		background-color: #ffffff;
		outline: none;
	}
`;

export default {
	FormTextField,
};
