import React from 'react';
import styled from 'styled-components';

import { device, PageHeadSpan, PageBody } from 'Styles/MyPage.Style';
import { AccountInfo, MemberProfile, ActivityInfo, EtcInfo } from 'components/MyPage';

const MyPageFrame = styled.div`
	width: 100%;
	margin: 0 auto;
	@media ${device.laptop} {
		max-width: 1240px;
	}
`;

const MyPage = () => {
	return (
		<MyPageFrame>
			<PageHeadSpan> 마이페이지</PageHeadSpan>
			<PageBody>
				<AccountInfo />
				<MemberProfile />
				<ActivityInfo />
				<EtcInfo />
			</PageBody>
		</MyPageFrame>
	);
};

export default MyPage;
