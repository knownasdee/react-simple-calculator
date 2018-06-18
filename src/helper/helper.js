const handleClear = () => {
	return {
		operand: null,
		operator: null,
		result: '0'
	};
};
const handleNumeric = (state, newValue) => {
	if (state.operand !== null) return { operand: state.operand + newValue };
	return { operand: newValue };
};

const handleSeparator = (state, separator) => {
	let operand = state.operand;
	if (operand && !operand.includes(separator)) return { operand: operand + separator };
	else if (!operand) return { operand: '0' + separator };
};

const handleOperator = (state, nextOperator) => {
	let { operand, operator, result } = state;

	if (operator && operand) {
		let operation = nextOperator === '=' ? null : nextOperator;
		return {
			operand: null,
			operator: operation,
			result: calculate(result, operand, operator)
		};
	}

	if (!operand) {
		return { operator: nextOperator };
	}

	return {
		operand: null,
		operator: nextOperator,
		result: operand
	};
};

const calculate = (operand1, operand2, operator) => {
	if (operator === '+') return parseFloat(operand1) + parseFloat(operand2);
	if (operator === '-') return parseFloat(operand1) - parseFloat(operand2);
};

export default {
	handleClear,
	handleNumeric,
	handleSeparator,
	handleOperator
};
