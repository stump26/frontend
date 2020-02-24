import React from 'react';
import styled from 'styled-components';

const FormDateRangePickerFrame = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 10px 20px;
`;
const DatePicker = styled.input`
	height: 46px;
	padding-left: 1em;
	border-radius: 5px;
	border: solid 1px #e6e6e6;
	background-color: #f7f7f7;
	:focus {
		border: solid 1px #00df9b;
		background-color: #ffffff;
		outline: none;
	}
`;

const DateRangePicker = ({ refs: [fromDatePickerRef, toDatePickerRef] }) => {
	return (
		<FormDateRangePickerFrame>
			<DatePicker type="date" ref={fromDatePickerRef} />
			~
			<DatePicker type="date" ref={toDatePickerRef} />
		</FormDateRangePickerFrame>
	);
};

export default DateRangePicker;
