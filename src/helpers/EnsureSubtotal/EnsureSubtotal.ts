import { ICartItem } from '../../store';
import { EnsureCurrency } from '../EnsureCurrency';

export default function EnsureSubtotal(items: Array<ICartItem>) {
  const itemsArrayValue = items.map((item) => item.price.value);
  const itemsArrayValueInstallments = items.map((item) => item.price.installmentValue);

  const subtotal = itemsArrayValue.reduce((accumulator, item) => {
    const finalItem = parseFloat((accumulator + item).toFixed(2));

    return finalItem;
  }, 0);

  const installmentValue = itemsArrayValueInstallments.reduce((accumulator, item) => {
    const finalItem = parseFloat((accumulator + item).toFixed(2));

    return finalItem;
  }, 0);

  const subtotalCurrency = EnsureCurrency(subtotal);
  const installmentValueCurrency = EnsureCurrency(installmentValue);

  return { subtotalCurrency, installmentValueCurrency };
}
