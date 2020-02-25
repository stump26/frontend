import React from 'react';
import {
	ContainerFrame,
	ContainerTitle,
	ContainerBody,
	ContainerSubTitle,
	FormTextField,
	FormField,
} from 'Styles/main';

const AccountInfo = () => {
	return (
		<ContainerFrame>
			<ContainerTitle>계정정보</ContainerTitle>
			<ContainerBody>
				<FormField>
					<ContainerSubTitle>이름</ContainerSubTitle>
					<FormTextField placeholder="내용을 입력하세요" />
				</FormField>
				<FormField>
					<ContainerSubTitle>이메일</ContainerSubTitle>
					<FormTextField placeholder="내용을 입력하세요" />
				</FormField>
				<FormField>
					<ContainerSubTitle>아이디</ContainerSubTitle>
					<FormTextField placeholder="내용을 입력하세요" />
				</FormField>
				<FormField>
					<ContainerSubTitle>비밀번호</ContainerSubTitle>
					<FormTextField placeholder="내용을 입력하세요" />
				</FormField>
			</ContainerBody>
		</ContainerFrame>
	);
};

export default AccountInfo;
