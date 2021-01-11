import {
	MAX_MILLISECONDS,
	MAX_SECONDS,
	MAX_MINUTES,
	MAX_HOURS,
	convertTimeUnits,
} from './time'

const MILLISECONDS_IN_SECOND = convertTimeUnits(
	1, 'second', 'millisecond'
);

const MILLISECONDS_IN_MINUTE = convertTimeUnits(
	1, 'minute', 'millisecond'
);

const MILLISECONDS_IN_HOUR = convertTimeUnits(
	1, 'hour', 'millisecond'
);

export default class Timer {
	#millisecondsLeft;
	#timeoutID;
	#intervals = {
		secondChange: null,
		minuteChange: null,
		hourChange: null,
	}

	constructor(duration = 0) {
		this.duration = duration;
		this.#millisecondsLeft = duration;
		this.hasBeenStarted = false;
		this.startDate = null;
		this.lastUpdateDate = null;
		this.isRunning = false;
		this.timeIsUp = false;
		this.onSecondChange = null;
		this.onMinuteChange = null;
		this.onHourChange = null;
	}

	start() {
		this.#timeoutID = setTimeout(this.stop, this.duration);
		this.hasBeenStarted = true;
		this.startDate = new Date();
		this.lastUpdateDate = this.startDate;
		this.isRunning = true;
		this.setTimeouts(this.millisecondsLeft);
	}

	setTimeouts(millisecondsLeft) {
		if (this.onSecondChange) {
			this.#intervals.secondChange = setInterval(
				this.onSecondChange, 
				MILLISECONDS_IN_SECOND
			);
		}

		if (this.onSecondChange) {
			this.#intervals.minuteChange = setInterval(
				this.onMinuteChange, 
				MILLISECONDS_IN_MINUTE
			);
		}

		if (this.onHourChange) {
			this.#intervals.hourChange = setInterval(
				this.onHourChange, 
				MILLISECONDS_IN_HOUR
			);
		}
	}

	resume() {
		this.isRunning = true;
		this.lastUpdateDate = new Date();

		this.#timeoutID = setTimeout(this.stop, this.millisecondsLeft);
		this.setTimeouts(this.#millisecondsLeft);
	}
	
	pause() {
		this.updateMillisecondsLeft();

		clearTimeout(this.#timeoutID);
		this.isRunning = false;
		
		for (const interval in this.#intervals) {
			clearInterval(this.#intervals[interval]);
		}
	}

	stop = () => {
		this.pause();
		this.duration = 0;
		this.hasBeenStarted = false;
		this.startDate = null;
		this.timeIsUp = true;
	}

	updateMillisecondsLeft() {
		if (this.isRunning) {
			const currUpdateDate = new Date();

			this.#millisecondsLeft -= currUpdateDate - this.lastUpdateDate;
			this.lastUpdateDate = currUpdateDate;
			console.log(this.#millisecondsLeft);
		}
	}

	get millisecondsLeft() {
		this.updateMillisecondsLeft();

		return this.#millisecondsLeft;
	}

	get timeLeft() {		
		const millisecondsLeft = this.millisecondsLeft;

		const hours = Math.ceil(convertTimeUnits(
			millisecondsLeft, 'millisecond', 'hour'
		)) % MAX_HOURS;

		const minutes = Math.ceil(convertTimeUnits(
			millisecondsLeft, 'millisecond', 'minute'
		)) % MAX_MINUTES;
			
		const seconds = Math.ceil(convertTimeUnits(
			millisecondsLeft, 'millisecond', 'second'
		)) % MAX_SECONDS;

		return {
			hours,
			minutes,
			seconds,
		}
	}
}

const timer = new Timer(15000);
timer.onSecondChange = () => {
	console.log(timer.timeLeft.seconds);
}
timer.start();

setTimeout(() => {
	timer.pause();
	console.log('paused');
}, 3000);

setTimeout(() => {
	timer.resume();
	console.log('resumed');
}, 7000);

setTimeout(() => {
	timer.pause();
	console.log('paused');
}, 9000);

setTimeout(() => {
	timer.resume();
	console.log('resumed');
}, 10000);