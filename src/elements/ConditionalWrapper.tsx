import React from 'react';

interface ConditionalWrapperProps {
	children: JSX.Element;
	condition: boolean;
	wrapper: (children: JSX.Element) => JSX.Element;
}

export default ({ children, condition, wrapper }: ConditionalWrapperProps) =>
	condition ? React.cloneElement(wrapper(children)) : children;
