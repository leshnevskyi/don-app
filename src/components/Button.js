import React from 'react';
import {useCustomFocus} from 'hooks/useCustomFocus';

export default function Button(props) {
	const {type = 'button', className = 'button', ...restProps} = props;

	const focusEvents = useCustomFocus(restProps);

	return (
		<button
			className={className}
			type={type}
			{...restProps}
			{...focusEvents}
		>
			{props.children}
		</button>
	);
}
