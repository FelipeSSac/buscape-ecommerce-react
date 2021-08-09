const EnsureCurrency = (value: number) => {
  const strValue = value.toString();
  const arrayValue = strValue.split('.');

  if (!arrayValue[1]) {
    const finalValue = `${strValue},00`;

    return finalValue;
  }
  if (strValue[1].length <= 1) {
    const finalValue = `${strValue[1]},00`;

    return finalValue;
  }

  const finalValue = arrayValue.join(',');

  return finalValue;
};

export default EnsureCurrency;
