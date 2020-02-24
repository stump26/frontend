import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

import DropdownSelector from '../commons/DropdownSelector';

export const PositionCardBackground = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	padding: 10px 20px;
	background-color: #f5f5f5;
`;

const PositionCardFrame = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 64px;
	margin: 5px 0;
	border-radius: 3px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07);
	background-color: #ffffff;
`;

const PositionAddBtnFrame = styled.button`
	height: 46px;
	margin: 5px 0;
	border-radius: 6px;
	border: dashed 2px #cccccc;
	background-color: #ffffff;
`;

const PositionTackIcon = styled(FontAwesomeIcon)`
	margin: auto;
	color: ${(props) => (props.enable ? '#08d194' : '#d1d2d4')};
`;
const PositionCloseIcon = styled(FontAwesomeIcon)`
	margin: auto;
	color: ${(props) => (props.enable ? '#08d194' : '#d1d2d4')};
`;

export const PositionCard = ({ enableTack }) => {
	return (
		<PositionCardFrame>
			<PositionTackIcon icon={faThumbtack} enable={enableTack} />
			<DropdownSelector
				width="37%"
				field={['기획', '디자인', '개발']}
				placeholder="대분류"
				margin="0 3px"
			/>
			<DropdownSelector
				width="37%"
				field={['데이터 사이언티스트', '프론트엔드', '백엔드']}
				placeholder="소분류"
				margin="0 3px"
			/>
			<PositionCloseIcon icon={faTimes} />
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
