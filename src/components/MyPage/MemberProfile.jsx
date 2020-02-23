import React from 'react';
import styled from 'styled-components';

import {
	ContainerFrame,
	ContainerTitle,
	ContainerSubTitle,
	FormTextField,
} from 'Styles/main.mobile';
import { PositionCardBackground, PositionCard, PositionAddBtn } from './PositionCard';
import DropdownSelector from './DropdownSelector';

const IdentySelector = styled.div`
	margin: 0 20px;
	margin-bottom: 20px;
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
			<PositionCardBackground>
				<PositionCard enableTack />
			</PositionCardBackground>
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
