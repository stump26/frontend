import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import {
	ContainerFrame,
	ContainerTitle,
	ContainerSubTitle,
	FormTextField,
	FormField,
	ContainerBody,
} from 'Styles/main';
import {
	PositionCardListBox,
	PositionCardBackground,
	PositionSubTitle,
	PositionFrame,
	CardsListFrame,
	PositionCard,
	PositionAddBtn,
} from './PositionCard';
import DropdownSelector from '../commons/DropdownSelector';
import DateRangePicker from 'components/commons/DateRangePicker';

const IdentySelector = styled.div`
	margin-bottom: 20px;
	width: 105%;
`;
const ICAngleDoubleRight = styled(FontAwesomeIcon).attrs(() => ({
	icon: faAngleDoubleRight,
}))`
	width: 12px !important;
	color: #979797;
`;

const MemberProfile = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

	//redux로 뺴낼것
	const fromDate = useState(moment().format('YYYY-MM-DD'));
	const toDate = useState(moment().format('YYYY-MM-DD'));
	const fromDatePickerRef = useRef();
	const toDatePickerRef = useRef();

	return (
		<ContainerFrame>
			<ContainerTitle>회원정보</ContainerTitle>
			{isTabletOrMobile ? (
				<>
					<ContainerBody>
						<FormField>
							<ContainerSubTitle>연락처</ContainerSubTitle>
							<FormTextField placeholder="내용을 입력하세요" />
						</FormField>
						<FormField>
							<ContainerSubTitle>직업</ContainerSubTitle>
							<IdentySelector>
								<DropdownSelector field={['대학생', '직장인']} placeholder="항목을 선택하세요" />
							</IdentySelector>
						</FormField>
						<FormField>
							<ContainerSubTitle>프로젝트 참여 가능 기간</ContainerSubTitle>
							<DateRangePicker refs={[fromDatePickerRef, toDatePickerRef]} />
						</FormField>
					</ContainerBody>
					<ContainerBody>
						<ContainerSubTitle>포지션</ContainerSubTitle>
					</ContainerBody>
					<PositionCardListBox>
						<PositionSubTitle>베이스 포지션</PositionSubTitle>
						<PositionCardBackground>
							<PositionCard enableTack />
						</PositionCardBackground>
						<PositionSubTitle>서브 포지션</PositionSubTitle>
						<PositionCardBackground>
							<PositionCard />
							<PositionCard />
							<PositionCard />
							<PositionCard />
							<PositionCard />

							<PositionAddBtn />
						</PositionCardBackground>
					</PositionCardListBox>
				</>
			) : (
				<>
					<ContainerBody>
						<FormField>
							<ContainerSubTitle>직업</ContainerSubTitle>
							<IdentySelector>
								<DropdownSelector field={['대학생', '직장인']} placeholder="항목을 선택하세요" />
							</IdentySelector>
						</FormField>
						<FormField>
							<ContainerSubTitle>연락처</ContainerSubTitle>
							<FormTextField placeholder="내용을 입력하세요" />
						</FormField>
						<FormField>
							<ContainerSubTitle>프로젝트 참여 가능 기간</ContainerSubTitle>
							<DateRangePicker refs={[fromDatePickerRef, toDatePickerRef]} />
						</FormField>
					</ContainerBody>

					<ContainerBody>
						<ContainerSubTitle>포지션</ContainerSubTitle>
					</ContainerBody>
					<PositionCardListBox>
						<PositionFrame>
							<PositionSubTitle>서브 포지션</PositionSubTitle>
							<PositionCardBackground mode="sub">
								<CardsListFrame>
									<PositionCard />
									<PositionCard />
									<PositionCard />
									<PositionCard />
									<PositionCard />
								</CardsListFrame>
								<PositionAddBtn />
							</PositionCardBackground>
						</PositionFrame>
						<ICAngleDoubleRight />
						<PositionFrame>
							<PositionSubTitle>베이스 포지션</PositionSubTitle>
							<PositionCardBackground mode="base">
								<PositionCard enableTack />
							</PositionCardBackground>
						</PositionFrame>
					</PositionCardListBox>
				</>
			)}
		</ContainerFrame>
	);
};

export default MemberProfile;
