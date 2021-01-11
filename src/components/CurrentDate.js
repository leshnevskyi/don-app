import React from 'react';
import {dateToString} from 'utils/date';
import {useCurrentDate} from 'hooks/useCurrentDate';

import './CurrentDate.css';

export default function CurrentDate() {
	const currentDate = useCurrentDate(new Date());

	return (
		<time 
			dateTime={dateToString(currentDate, '-', 'YMD')} 
			className="current_date"
		>
			{dateToString(currentDate, ' ', 'MDY')}
		</time>
	);
}
