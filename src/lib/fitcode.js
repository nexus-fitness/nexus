const SET_DELIM = ',';
const MULTI_SET_DELIM = 'x';
const AMOUNT_DELIM = '@';
const MULTI_AMOUNT_DELIM = '/';

export default function fitcode(rawInput = '', base = {}) {
  const input = rawInput.replace(' ', '').toLowerCase();

  if (!input) return [];

  const sets = [];

  const isMultiSet = input.includes(MULTI_SET_DELIM);
  if (isMultiSet) {
    const split = input.split(MULTI_SET_DELIM);
    const numberOfSets = split[0];
    const volumeAndAmount = split[1];
    const [volume, amount] = volumeAndAmount.split(AMOUNT_DELIM);

    const isMultiAmount = amount?.includes(MULTI_AMOUNT_DELIM);
    let amounts = [];
    if (isMultiAmount) {
      amounts = amount.split(MULTI_AMOUNT_DELIM);
    }

    let count = 0;
    while (count < numberOfSets) {
      sets.push({
        volume: volume || null,
        amount: (isMultiAmount ? amounts[count] : amount) || null,
        unit: 'lbs',
        ...base,
      });
      count += 1;
    }
  } else {
    input.split(SET_DELIM).forEach((volumeAndAmount) => {
      const [volume, amount] = volumeAndAmount.split(AMOUNT_DELIM);

      sets.push({
        volume: volume || undefined,
        amount: amount || undefined,
        unit: 'lbs',
        ...base,
      });
    });
  }

  return sets;
}
