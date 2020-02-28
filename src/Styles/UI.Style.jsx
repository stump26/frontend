import styled from 'styled-components';

const viewPortSize = {
	mobile: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '1980px',
};
export const device = {
	mobile: `(max-width: ${viewPortSize.mobile})`,
	tablet: `(max-width: ${viewPortSize.laptop})`,
	laptop: `(min-width: ${viewPortSize.laptop})`,
	laptopL: `(min-width: ${viewPortSize.laptopL})`,
	desktop: `(min-width: ${viewPortSize.desktop})`,
};

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
	device,
};
