import Config from './config';

const separator = Config.Separator;

const getCorrectionFactor = (operand1, operand2) => {
  let cf1 = 1;
  let cf2 = 1;
  if (operand1.includes(separator)) cf1 = 10 ** (operand1.length - 2);
  if (operand2.includes(separator)) cf2 = 10 ** (operand2.length - 2);

  return cf1 >= cf2 ? cf1 : cf2;
};

const calculate = (operand1, operand2, operator) => {
  const op1 = parseFloat(operand1);
  const op2 = parseFloat(operand2);
  const cf = getCorrectionFactor(operand1, operand2);

  let result;
  if (operator === '+') result = (op1 * cf + op2 * cf) / cf;
  if (operator === '-') result = (op1 * cf - op2 * cf) / cf;

  return result;
};

const handleClear = () => ({
  operand: null,
  operator: null,
  result: '0',
  history: ''
});

const handleNumeric = (state, newValue) => {
  if (state.operand === '0' && newValue === '0') return {};
  if (state.operand !== null) return { operand: state.operand + String(newValue) };
  return { operand: String(newValue) };
};

const handleSeparator = state => {
  const { operand } = state;
  if (operand && !operand.includes(separator)) return { operand: operand + separator };
  else if (!operand) return { operand: `0${separator}` };
  return {};
};

const handleOperator = (state, nextOperator) => {
  const { operand, operator, result, history } = state;

  // a minimum of two operands and an operation were enetered, (temp) result can be calculated
  if (operand && operator) {
    // reset history if this is the final result
    if (nextOperator === '=') {
      return {
        operand: null,
        operator: null,
        result: String(calculate(result, operand, operator)),
        history: ''
      };
    }
    // keep on chaining history if last operation was + or -
    return {
      operand: null,
      operator: nextOperator,
      result: String(calculate(result, operand, operator)),
      history: history + operand + nextOperator
    };
  }

  // (temp) result has been calculated, next operation entered
  if (!operand && nextOperator !== '=') {
    const currentHistory = history.length > 0 ? history.substr(0, history.length - 1) : result;
    return {
      operator: nextOperator,
      history: currentHistory + nextOperator
    };
  }

  // if '=' is clicked right after a calculation or number entry, do nothing
  if (nextOperator === '=') {
    return {
      operand: null,
      operator: null,
      result: operand || result,
      history: ''
    };
  }

  // first operand and first action (+ or -) were entered
  return {
    operand: null,
    operator: nextOperator,
    result: operand,
    history: history + operand + nextOperator
  };
};

export default {
  handleClear,
  handleNumeric,
  handleSeparator,
  handleOperator
};
