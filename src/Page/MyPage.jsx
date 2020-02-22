import React from 'react';
import styled from 'styled-components';

import { PageHeadSpan, PageBody } from 'Styles/main.mobile';
import { AccountInfo } from 'components/MyPage';

const MyPageFrame = styled.div`
	width: 100%;
	margin: 0;
`;

const MyPage = () => {
	return (
		<MyPageFrame>
			<PageHeadSpan> 마이페이지</PageHeadSpan>
			<PageBody>
				<AccountInfo />
			</PageBody>
		</MyPageFrame>
	);
};

export default MyPage;
