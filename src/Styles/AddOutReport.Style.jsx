import styled from 'styled-components';
import mainUI, { device } from './UI.Style';
import { CardsListFrame } from 'components/commons/PositionCard';

export const ReportFrame = styled.div`
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 1em;
`;

export const TiTle = styled.div`
	margin: 10vh 0;
	font-size: 34px;
	font-weight: bold;
	color: #333333;
`;
export const ReportContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const ReportButtonFrame = styled.div`
	display: flex;
	flex-direction: column;
	width: 48%;
	height: 45vh;
	font-size: 26px;
	font-weight: bold;
	border-radius: 5px;
	background-color: #ffffff;
	box-shadow: 3px 6px 10px 0 rgba(0, 0, 0, 0.07);
	justify-content: contain;
	&:hover {
		box-shadow: 0 12px 35px 0 rgba(0, 0, 0, 0.09);
		border: solid 1px #08d194;

		> div.desc {
			color: #08d194;
		}
	}

	> div.desc {
		flex-basis: 1;
		margin: 5rem auto 4rem auto;
		text-align: center;
	}
`;

export const InfoGraph = styled.img`
	margin: 0 auto;
	width: 80%;
	object-fit: contain;
	flex-basis: 2;
`;

export const PageFrame = styled.div`
	width: 100%;
	max-width: 1240px;
	margin: 0 auto;
	padding: 15px;
	border-radius: 5px;
	box-shadow: 3px 6px 10px 0 rgba(0, 0, 0, 0.07);
	background-color: #ffffff;
`;

export const FieldTitle = styled.div`
	font-size: 14px;
	font-weight: 900;
	padding: 1rem 0;
`;

export const FormTextField = styled(mainUI.FormTextField).attrs(({ placeholder }) => ({
	type: 'text',
	placeholder: placeholder || '내용을 입력해주세요',
}))`
	width: calc(100% - 15px);
	max-width: ${({ width }) => width || ''};
	height: 46px;
	padding-left: 1em;
`;

export const CusCardsListFrame = styled(CardsListFrame)`
	justify-content: unset;
`;
