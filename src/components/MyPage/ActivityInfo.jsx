import React from 'react';

import YesOrNoButton from 'components/commons/YesOrNoButton';
import CheckBoxGroup from 'components/commons/CheckBoxGroup';
import {
	ContainerFrame,
	ContainerTitle,
	ContainerSubTitle,
	FormTextArea,
	ContainerBody,
	FormField,
} from 'Styles/main';

const ActivityInformation = () => {
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
			<ContainerBody>
				<FormField size="half">
					<ContainerSubTitle>사용사능한 Tool 및 기술</ContainerSubTitle>
					<FormTextArea />
				</FormField>
				<FormField size="half">
					<ContainerSubTitle>협업툴</ContainerSubTitle>
					<FormTextArea />
				</FormField>
				<FormField size="half">
					<ContainerSubTitle>팀빌딩 경험</ContainerSubTitle>
					<YesOrNoButton />
				</FormField>
				<FormField size="half">
					<ContainerSubTitle>선호 멤버 유형</ContainerSubTitle>
					<CheckBoxGroup checkProps={PreferMemberProps} />
				</FormField>
			</ContainerBody>
		</ContainerFrame>
	);
};

export default ActivityInformation;
