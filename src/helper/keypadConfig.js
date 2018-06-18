export const getDecimalSeparator = () => {
	const n = 1.1;
	return /^1(.+)1$/.exec(n.toLocaleString())[1];
};

export const Operators = ['+', '-', '='];

export const Numerics = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
