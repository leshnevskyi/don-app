import {useState, useEffect} from 'react';
import {getTimeLeftUntilTomorrow} from 'utils/date';

export function useCurrentDate(initialDate = new Date()) {
	const [currentDate, setCurrentDate] = useState(initialDate);

	useEffect(() => {
		const timeLeftUntilTomorrow = getTimeLeftUntilTomorrow();

		const timeoutID = setTimeout(function refreshDate() {
			const dateNow = new Date();
			const timeLeftUntilTomorrow = getTimeLeftUntilTomorrow(dateNow);

			setCurrentDate(dateNow);

			setTimeout(refreshDate, timeLeftUntilTomorrow)
		}, timeLeftUntilTomorrow);

		return () => {
			clearTimeout(timeoutID);
		}
	}, []);

	return currentDate;
}