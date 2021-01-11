import {isFunction} from 'lodash-es';

export function useCustomFocus({
	onClick, 
	onMouseLeave, 
	onTouchStart, 
	onTouchEnd
} = {}) {
	function focus(e) {
		e.target.focus();
	}

	function blur(e) {
		e.target.blur();
	}

	function handleEvent(callbacks) {
		return function(e) {
			callbacks.forEach(callback => {
				if (isFunction(callback)) callback(e);
			});
		}
	}

	return {
		onClick: handleEvent([onClick, blur]),
		onMouseLeave: handleEvent([onMouseLeave, blur]),
		onTouchStart: handleEvent([onTouchStart, focus]),
		onTouchEnd: handleEvent([onTouchEnd, blur])
	}
}