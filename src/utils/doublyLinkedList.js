export class DoublyLinkedListNode {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

export default class DoublyLinkedList {
	constructor(...data) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		this.push(...data);
	}

	push(...data) {
		data.forEach(data => {
			const newNode = new DoublyLinkedListNode(data);

			if (!this.head) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				this.tail.next = newNode;
				newNode.prev = this.tail;
				this.tail = newNode;
			}
	
			this.length++;
		});
	
		return this.length;
	}

	pop() {
		if (this.length === 0) return;

		const removedNode = this.tail;
		const newTail = this.tail.prev;

		this.tail.prev = null;
		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (!this.tail) this.head = null;
		
		return removedNode;
	}

	shift() {
		if (this.length === 0) return;

		const removedNode = this.head;
		const newHead = this.head.next;

		this.head.next = null;
		this.head = newHead;
		this.head.prev = null;
		this.length--;

		if (!this.head) this.tail = null;

		return removedNode;
	}

	unshift(...data) {
		data.forEach(data => {
			const newNode = new DoublyLinkedListNode(data);
	
			if (!this.head) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				this.head.prev = newNode;
				newNode.next = this.tail;
				this.tail = newNode;
			}
	
			this.length++;
		});
	
		return this.length;
	}

	forEach(callback) {
		let currentNode = this.head;

		while (currentNode) {
			callback(currentNode);
			currentNode = currentNode.next;
		}
	}

	find(callback) {
		let currentNode = this.head;

		while (currentNode) {
			if (callback(currentNode)) {
				return currentNode;
			}

			currentNode = currentNode.next;
		}
	}

	findIndex(callback) {
		let currentIndex = -1;
		let currentNode = this.head;

		while (currentNode) {
			currentIndex++;

			if (callback(currentNode)) {
				return currentIndex;
			}

			currentNode = currentNode.next;
		}
	}

	getNodeByIndex(index) {
		let foundNode;
		let currentNode = this.head;
		let currentIndex = 0;
		
		while (currentNode) {
			if (currentIndex === index) {
				foundNode = currentNode;

				break;
			}

			currentNode = currentNode.next;
			currentIndex++;
		}

		return foundNode;
	}

	filter(callback) {
		const filteredList = new DoublyLinkedList();

		this.forEach(node => {
			if (callback(node)) filteredList.push(node.data);
		});

		return filteredList;
	}

	log(label = 'Doubly linked list') {
		console.group(label);
		this.forEach(node => {
			console.log(node);
		});
		console.groupEnd();
	}
}