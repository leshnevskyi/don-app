export function dateToObject(date = new Date(), time = false) {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	date = {
		day,
		month,
		year
	}

	if (time) {
		const milliseconds = date.getMilliseconds();
		const	seconds = date.getSeconds();
		const minutes = date.getMinutes();
		const hours = date.getHours();

		time = {
			milliseconds,
			seconds,
			minutes,
			hours
		}

		return {
			...time,
			...date
		}
	}

	return {
		...date
	}
}

export function getTomorrowDate(date = new Date()) {
	const tomorrow = new Date(date);
	tomorrow.setDate(date.getDate() + 1);
	tomorrow.setHours(0, 0, 0, 0);

	return tomorrow;
}

export function getTimeLeftUntilTomorrow(dateNow = new Date()) {
	const tomorrow = getTomorrowDate(dateNow);
	const timeLeftUntilTomorrow = tomorrow.getTime() - dateNow.getTime();

	return timeLeftUntilTomorrow;
}

export function dateToString(date = new Date(), separator = ' ', 
dateFormat = 'MDY') {
	const {day, month, year} = dateToObject(date, false);

	date = [];

	for (const letter of dateFormat) {
		switch (letter) {
			case 'D':
			case 'd':
				date = [...date, day];
				break;
			case 'M':
			case 'm':
				date = [...date, month];
				break;
			case 'Y':
			case 'y':
				date = [...date, year];
				break;
			default:
				console.error(`Warning: The date format is not valid.\n\tin ${
					dateToString.name
				}`);
		}
	}

	return date.join(separator);
}