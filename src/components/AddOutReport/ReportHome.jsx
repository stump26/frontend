import React from 'react';
import {
	ReportFrame,
	TiTle,
	ReportContainer,
	ReportButtonFrame,
	InfoGraph,
} from 'Styles/AddOutReport.Style';

const ReportHome = ({ pageNation }) => {
	return (
		<ReportFrame>
			<TiTle>이탈신고･충원요청</TiTle>
			<ReportContainer>
				<ReportButtonFrame
					onClick={() => {
						pageNation(2);
					}}
				>
					<div className="desc">이탈한 회원 때문에 충원이 필요해요!</div>
					<InfoGraph src="/member_in_infography.png" />
				</ReportButtonFrame>
				<ReportButtonFrame
					onClick={() => {
						pageNation(3);
					}}
				>
					<div className="desc">우리 팀에 추가적으로 멤버를 영입할래요!</div>
					<InfoGraph src="/member_out_infography.png" />
				</ReportButtonFrame>
			</ReportContainer>
		</ReportFrame>
	);
};

export default ReportHome;
