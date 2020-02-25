import React from 'react';
import styled from 'styled-components';

import { ContainerFrame, ContainerTitle, ContainerSubTitle, FormTextField } from 'Styles/main';
import { PositionCardBackground, PositionCard, PositionAddBtn } from './PositionCard';
import DropdownSelector from '../commons/DropdownSelector';

const IdentySelector = styled.div`
	margin: 0 20px;
	margin-bottom: 20px;
`;
const PositionSubTitle = styled.span`
	margin: 0 20px;
	margin-bottom: 10px;
	font-size: 12px;
	font-weight: bold;
	color: #999999;
`;

const MemberProfile = () => {
	return (
		<ContainerFrame>
			<ContainerTitle>회원정보</ContainerTitle>
			<ContainerSubTitle>연락처</ContainerSubTitle>
			<FormTextField placeholder="내용을 입력하세요" />
			<ContainerSubTitle>신분</ContainerSubTitle>
			<IdentySelector>
				<DropdownSelector field={['대학생', '직장인']} placeholder="항목을 선택하세요" />
			</IdentySelector>
			<ContainerSubTitle>포지션</ContainerSubTitle>
			<PositionSubTitle>베이스 포지션</PositionSubTitle>
			<PositionCardBackground>
				<PositionCard enableTack />
			</PositionCardBackground>
			<PositionSubTitle>서브 포지션</PositionSubTitle>
			<PositionCardBackground>
				<PositionCard />
				<PositionCard />
				<PositionCard />
				<PositionAddBtn />
			</PositionCardBackground>
		</ContainerFrame>
	);
};

export default MemberProfile;
