import styled from 'styled-components';
import mainUI from './UI.Style';

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
export const PageHeadSpan = styled.span`
	position: relative;
	display: inline-block;
	width: calc(100% - 14px);
	font-weight: 900;
	border-bottom: 1px solid #e6e6e6;
	@media ${device.tablet} {
		font-size: 28px;
		margin-top: 0.5rem;
		padding-left: 0.5em;
		padding-bottom: 1rem;
		background-color: #ffffff;
	}
	@media ${device.laptop} {
		border-bottom: none;
		font-size: 34px;
		margin-top: 70px;
		margin-bottom: 0;
		padding-left: 0;
		padding-bottom: 30px;
		color: #333333;
	}
`;

export const PageBody = styled.div`
	background-color: #ffffff;
	padding-top: 20px;
	@media ${device.laptop} {
		border-radius: 5px;
		box-shadow: 3px 6px 10px 0 rgba(0, 0, 0, 0.07);
	}
`;

export const ContainerFrame = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	border-bottom: 1px dashed #e6e6e6;
	background-color: #ffffff;
	@media ${device.laptop} {
		font-size: 24px;
	}
`;

export const ContainerBody = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 40px);
	margin: 0 20px;
	@media ${device.laptop} {
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const ContainerTitle = styled.span`
	margin: 0 20px;
	margin-bottom: 20px;
	font-size: 18px;
	font-weight: 900;
	@media ${device.laptop} {
		font-size: 24px;
	}
`;

export const FormField = styled.div`
	position: relative;
	width: 100%;
	margin: ${(props) => props.margin || '0'};
	margin-bottom: 20px;
	@media ${device.laptop} {
		width: 353px;
		margin: 0 10px;

		${({ size }) =>
			size === 'half' && {
				flexBasis: '47%',
				margin: '0 10px',
			}}
	}
`;

export const ContainerSubTitle = styled.div`
	display: block;
	margin: 10px 0;
	font-size: 14px;
	font-weight: 900;
`;

export const FormTextField = styled(mainUI.FormTextField).attrs(({ placeholder }) => ({
	type: 'text',
	placeholder: placeholder || '내용을 입력해주세요',
}))`
	position: relative;
	width: ${(props) => props.width || 'calc(100% - 20px)'};
	height: 46px;
	padding-left: 1em;
	font-size: 14px;

	@media ${device.laptop} {
		width: 337px;
	}
`;

export const FormSingleSelect = styled.select`
	width: ${(props) => props.width || 'calc(100% - 20px)'};
	height: ${(props) => props.height || '46px'};
	background-color: #f7f7f7;
	font-size: 14px;
	margin: ${(props) => props.margin || '0'};
	padding-left: 1em;
	border-radius: 5px;
	border: solid 1px #e6e6e6;
	color: #b3b3b3;
`;

export const FormSingleOption = styled.option`
	background-color: #f7f7f7;
	font-size: 14px;
	border: solid 1px #e6e6e6;
	color: #b3b3b3;
`;

export const FormTextArea = styled.textarea.attrs(({ placeholder }) => ({
	placeholder: placeholder || '( , ) 로 구분하여 내용을 입력해주세요',
}))`
	min-height: 160px;
	border-radius: 1px;
	border: solid 1px #e6e6e6;
	background-color: #f7f7f7;
	font-size: 14px;
	resize: none;

	@media ${device.tablet} {
		width: 100%;
	}
	@media ${device.laptop} {
		width: 100%;
	}
	::placeholder {
		color: #b3b3b3;
	}
`;

export const FromGridFrame = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20px;
`;

export const FormCheckItem = styled.div`
	display: flex;
	flex-basis: 50%;
	align-items: center;
	margin-bottom: 8px;
	font-size: 14px;
`;
export const FormCheckbox = styled.input.attrs({
	type: 'checkbox',
})`
	width: 22px;
	height: 22px;
	border-radius: 5px;
	background-color: #00df9b;
`;
export const FormCheckboxLabel = styled.label`
	color: #666666;
`;
