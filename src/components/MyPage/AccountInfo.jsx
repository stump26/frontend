import React from 'react';
import {
	ContainerFrame,
	ContainerTitle,
	ContainerSubTitle,
	FormTextField,
} from 'Styles/main.mobile';

const AccountInfo = () => {
	return (
		<ContainerFrame>
			<ContainerTitle>계정정보</ContainerTitle>
			<ContainerSubTitle>이름</ContainerSubTitle>
			<FormTextField placeholder="내용을 입력하세요" />
			<ContainerSubTitle>이메일</ContainerSubTitle>
			<FormTextField placeholder="내용을 입력하세요" />
			<ContainerSubTitle>아이디</ContainerSubTitle>
			<FormTextField placeholder="내용을 입력하세요" />
			<ContainerSubTitle>비밀번호</ContainerSubTitle>
			<FormTextField placeholder="내용을 입력하세요" />
		</ContainerFrame>
	);
};

export default AccountInfo;
