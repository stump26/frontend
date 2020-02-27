import React from 'react';

import { FormSingleSelect, FormSingleOption } from 'Styles/MyPage.Style';

const DropdownSelector = ({ field, placeholder, width = null, height = null, margin = null }) => {
	return (
		<FormSingleSelect width={width} height={height} margin={margin}>
			<FormSingleOption value="" disabled selected>
				{placeholder}
			</FormSingleOption>
			<FormSingleOption value="" disabled>
				--------------------------------
			</FormSingleOption>
			{field.map((item) => (
				<FormSingleOption value={`${item}`}>{item}</FormSingleOption>
			))}
		</FormSingleSelect>
	);
};

export default DropdownSelector;
