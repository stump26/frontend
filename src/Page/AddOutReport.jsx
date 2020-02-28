import React, { useState } from 'react';
import { ReportHome, AddReport } from 'components/AddOutReport';

const AddOutReport = () => {
	const [viewPage, setViewPage] = useState(1);
	const pageNation = (page) => {
		setViewPage(page);
	};
	// viewPage === 1 && <ReportHome pageNation={pageNation} />
	return <AddReport />;
};

export default AddOutReport;
