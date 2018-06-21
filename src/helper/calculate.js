import Constants from './constants';

const separator = Constants.SEPARATOR;

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

export default {
  calculate
};
