import React from 'react';
import { PageFrame, FieldTitle, FormTextField, CusCardsListFrame } from 'Styles/AddOutReport.Style';
import {
	PositionCardBackground,
	PositionAddBtn,
	PositionCountCard,
} from 'components/commons/PositionCard';

const AddReport = () => {
	return (
		<PageFrame>
			<FieldTitle>충원 목적</FieldTitle>
			<FormTextField />
			<FieldTitle>충원 포지션</FieldTitle>
			<PositionCardBackground>
				<CusCardsListFrame>
					<PositionCountCard />
					<PositionCountCard />
					<PositionCountCard />
					<PositionCountCard />
				</CusCardsListFrame>
				<PositionAddBtn />
			</PositionCardBackground>
		</PageFrame>
	);
};

export default AddReport;
