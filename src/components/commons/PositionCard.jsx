import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faThumbtack,
	faTimes,
	faPlus,
	faPlusCircle,
	faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';

import { device } from 'Styles/UI.Style';
import DropdownSelector from './DropdownSelector';

export const PositionCardListBox = styled.div`
	@media ${device.laptop} {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;

export const PositionSubTitle = styled.span`
	margin-bottom: 10px;
	font-size: 12px;
	font-weight: 900;
	color: #999999;
	@media ${device.tablet} {
		margin-left: 20px;
	}
`;

export const PositionFrame = styled.div``;

export const PositionCardBackground = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	padding: 10px 10px;
	background-color: #f5f5f5;
	${({ mode }) => {
		if (mode === 'base') {
			return `
		@media ${device.laptop} {
			width: 353px;
  		height: 234px;

			> div{
				width : 323px;
				margin: auto;
			}
		}
  	`;
		}
		if (mode === 'sub') {
			return `
			@media ${device.laptop} {
				width: 767px;
				height: 234px;
			}
		}
  	`;
		}
	}}
`;

export const CardsListFrame = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	overflow: auto;

	justify-content: space-between;
	&::-webkit-scrollbar {
		width: 7px;
	}
	&::-webkit-scrollbar-track {
		background-color: none;
	}
	&::-webkit-scrollbar-thumb {
		width: 7px;
		height: 76px;
		border-radius: 3.5px;
		background-color: #d7d7d7;
	}
`;

const PositionCardFrame = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 3px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07);
	background-color: #ffffff;

	@media ${device.laptop} {
		width: 360px;
		margin: 5px 10px;
	}
`;

const PositionAddBtnFrame = styled.button`
	width: 100%;
	height: 46px;
	margin: 5px 0;
	border-radius: 6px;
	border: dashed 2px #cccccc;
	background-color: #ffffff;
	align-self: end;
	justify-self: end;
`;

const PositionTackIcon = styled(FontAwesomeIcon).attrs(() => ({
	icon: faThumbtack,
}))`
	margin: auto;
	width: 12px !important;
	color: ${(props) => (props.enable ? '#08d194' : '#d1d2d4')};
`;
const PositionCloseIcon = styled(FontAwesomeIcon).attrs(() => ({
	icon: faTimes,
}))`
	margin: auto;
	width: 12px !important;
	color: ${(props) => (props.enable ? '#08d194' : '#d1d2d4')};
`;

export const PositionCard = ({ enableTack }) => {
	return (
		<PositionCardFrame>
			<PositionTackIcon enable={enableTack} />
			<DropdownSelector
				width="37%"
				field={['기획', '디자인', '개발']}
				placeholder="대분류"
				margin="9px 3px"
			/>
			<DropdownSelector
				width="37%"
				field={['데이터 사이언티스트', '프론트엔드', '백엔드']}
				placeholder="소분류"
				margin="0 3px"
			/>
			<PositionCloseIcon />
		</PositionCardFrame>
	);
};

export const PositionAddBtn = () => {
	return (
		<PositionAddBtnFrame>
			<FontAwesomeIcon icon={faPlus} color="#666666" width={16} />
		</PositionAddBtnFrame>
	);
};

export const CardBody = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 64px;
	margin: 5px 0;
`;

export const CardFooter = styled.div`
	display: flex;
	flex-direction: row-reverse;
	> #counter {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 10px;
		margin-bottom: 5px;
		> svg {
			width: 25px;
		}
		> span.value {
			font-size: 14px;
			padding: 0 10px;
		}
	}
`;

export const PositionCountCard = () => {
	const cnt = 0;

	return (
		<PositionCardFrame>
			<CardBody>
				<DropdownSelector
					width="50%"
					field={['기획', '디자인', '개발']}
					placeholder="대분류"
					margin="9px 6px"
				/>
				<DropdownSelector
					width="50%"
					field={['데이터 사이언티스트', '프론트엔드', '백엔드']}
					placeholder="소분류"
					margin="9px 6px"
				/>
			</CardBody>
			<CardFooter>
				<div id="counter">
					<FontAwesomeIcon icon={faMinusCircle} color="#979797" size="2x" />
					<span className="value">{cnt}</span>
					<FontAwesomeIcon icon={faPlusCircle} color="#979797" size="2x" />
				</div>
			</CardFooter>
		</PositionCardFrame>
	);
};
