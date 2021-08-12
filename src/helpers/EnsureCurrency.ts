const EnsureCurrency = (value: number) => {
  const strValue = value.toString();
  const arrayValue = strValue.split('.');

  if (arrayValue.length === 1) {
    const finalValue = `R$ ${strValue},00`;

    return finalValue;
  }

  if (arrayValue[1].length === 1) {
    const finalValue = `R$ ${arrayValue.join(',')}0`;

    return finalValue;
  }

  const finalValue = `R$ ${arrayValue.join(',')}`;

  return finalValue;
};

export default EnsureCurrency;
