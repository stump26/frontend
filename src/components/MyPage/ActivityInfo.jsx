import React, { useState, useRef } from 'react';
import moment from 'moment';

import DateRangePicker from 'components/commons/DateRangePicker';
import YesOrNoButton from 'components/commons/YesOrNoButton';
import CheckBoxGroup from 'components/commons/CheckBoxGroup';
import {
	ContainerFrame,
	ContainerTitle,
	ContainerSubTitle,
	FormTextArea,
} from 'Styles/main.mobile';

const ActivityInformation = () => {
	const fromDate = useState(moment().format('YYYY-MM-DD'));
	const toDate = useState(moment().format('YYYY-MM-DD'));
	const fromDatePickerRef = useRef();
	const toDatePickerRef = useRef();

	const PreferMemberProps = [
		'독립적인',
		'수평적인',
		'상호의존적인',
		'수직적인',
		'업무중심적인',
		'도전정신이 있는',
		'안정을 추구하는',
		'관계중심적인',
		'수동적인',
		'능동적인',
	];
	return (
		<ContainerFrame>
			<ContainerTitle>활동 정보</ContainerTitle>
			<ContainerSubTitle>프로젝트 참여 가능 기간</ContainerSubTitle>
			<DateRangePicker refs={[fromDatePickerRef, toDatePickerRef]} />
			<ContainerSubTitle>사용사능한 Tool 및 기술</ContainerSubTitle>
			<FormTextArea />
			<ContainerSubTitle>협업툴</ContainerSubTitle>
			<FormTextArea />
			<ContainerSubTitle>팀빌딩 경험</ContainerSubTitle>
			<YesOrNoButton />
			<ContainerSubTitle>선호 멤버 유형</ContainerSubTitle>
			<CheckBoxGroup checkProps={PreferMemberProps} />
		</ContainerFrame>
	);
};

export default ActivityInformation;
