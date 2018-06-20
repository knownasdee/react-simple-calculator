export const Operators = ['+', '-', '='];

export const Numerics = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

export const formatResult = result => {
	if (result.length > 13) return String(parseFloat(result).toExponential(3));
	return result;
};
