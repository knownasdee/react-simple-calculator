const handleClear = () => {
	return {
		operand: null,
		operator: null,
		result: '0'
	};
};
const handleNumeric = (state, newValue) => {
	if (state.operand === '0' && newValue === '0') return;
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
			result: String(calculate(result, operand, operator))
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

const getDecimalSeparator = () => {
	const n = 1.1;
	return /^1(.+)1$/.exec(n.toLocaleString())[1];
};

const calculate = (operand1, operand2, operator) => {
	const op1 = parseFloat(operand1);
	const op2 = parseFloat(operand2);
	const cf = calculateCorrectionFactor(operand1, operand2);

	if (operator === '+') return (op1 * cf + op2 * cf) / cf;
	if (operator === '-') return (op1 * cf - op2 * cf) / cf;
};

const calculateCorrectionFactor = (operand1, operand2) => {
	const separator = getDecimalSeparator();
	let cf1 = 1;
	let cf2 = 1;
	if (operand1.includes(separator)) cf1 = Math.pow(10, operand1.length - 2);
	if (operand2.includes(separator)) cf2 = Math.pow(10, operand2.length - 2);

	return cf1 >= cf2 ? cf1 : cf2;
};

export default {
	handleClear,
	handleNumeric,
	handleSeparator,
	handleOperator,
	getDecimalSeparator
};
