import React from 'react';
import {
	FromGridFrame,
	FormCheckItem,
	FormCheckbox,
	FormCheckboxLabel,
	FormTextField,
} from 'Styles/main.mobile';
const PreferMemberProp = ({ checkProps }) => {
	return (
		<FromGridFrame>
			{checkProps.map((prop) => (
				<FormCheckItem>
					<FormCheckbox value={prop} />
					<FormCheckboxLabel>{prop}</FormCheckboxLabel>
				</FormCheckItem>
			))}
			{checkProps.includes('기타') && <FormTextField margin="0" />}
		</FromGridFrame>
	);
};

export default PreferMemberProp;
