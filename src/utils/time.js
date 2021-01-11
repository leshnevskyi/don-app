import DoublyLinkedList from './doublyLinkedList';

export const MAX_DAYS = 31;
export const MAX_MILLISECONDS = 1000;
export const MAX_SECONDS = 60;
export const MAX_MINUTES = 60;
export const MAX_HOURS = 24;

const timeUnitsList = new DoublyLinkedList(
	{
		unit: 'day',
		max: MAX_DAYS,
	},
	{
		unit: 'hour',
		max: MAX_HOURS,
	},
	{
		unit: 'minute',
		max: MAX_MINUTES,
	},
	{
		unit: 'second',
		max: MAX_SECONDS,
	},
	{
		unit: 'millisecond',
		max: MAX_MILLISECONDS,
	}
);

export function convertTimeUnits(num = 1, fromUnit, toUnit) {
	let res = num;

	const startingNode = timeUnitsList.find(node => {
		const unit = node.data.unit;

		return unit === fromUnit || unit === toUnit;
	});
	let currentNode = startingNode;

	if (startingNode.data.unit === fromUnit) {
		while (currentNode) {
			if (currentNode.data.unit === toUnit) {
				return res;
			}

			res *= currentNode.next.data.max;
	
			currentNode = currentNode.next;
		}
	} else if (startingNode.data.unit === toUnit) {
		while (currentNode) {
			if (currentNode.data.unit === fromUnit) {
				return res;
			}

			res /= currentNode.next.data.max;
	
			currentNode = currentNode.next;
		}
	}

	return res;
}