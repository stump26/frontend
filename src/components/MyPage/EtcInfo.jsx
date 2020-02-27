import React from 'react';

import YesOrNoButton from 'components/commons/YesOrNoButton';
import CheckBoxGroup from 'components/commons/CheckBoxGroup';
import {
	ContainerFrame,
	ContainerTitle,
	ContainerSubTitle,
	ContainerBody,
	FormField,
} from 'Styles/MyPage.Style';

const EtcInfo = () => {
	const communityEntryPathProps = ['직접 검색', '지인 추천', '타 포털사이트 카페', 'SNS', '기타'];
	return (
		<ContainerFrame>
			<ContainerTitle>기타 정보</ContainerTitle>
			<ContainerBody>
				<FormField size="half">
					<ContainerSubTitle>사이드 프로젝트 경험</ContainerSubTitle>
					<YesOrNoButton />
				</FormField>
				<FormField size="half">
					<ContainerSubTitle>커뮤니티 진입 경로</ContainerSubTitle>
					<CheckBoxGroup checkProps={communityEntryPathProps} />
				</FormField>
			</ContainerBody>
		</ContainerFrame>
	);
};

export default EtcInfo;
