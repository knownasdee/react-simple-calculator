const Numerics = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
const Separator = '.';
const Operators = ['+', '-', '='];
const Clear = 'C';

export const formatResult = result => {
	if (result.length > 13) return String(parseFloat(result).toExponential(3));
	return result;
};

export default {
	Numerics,
	Separator,
	Operators,
	Clear
};
