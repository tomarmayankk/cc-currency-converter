import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_SoBYcePZNqpUcSpRkbOp8cixlY7Aw6QlE3HPstZG');
export async function convertCurrency(fromCurerncy, toCurerncy, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurerncy,
        currencies: toCurerncy
    });
const multiplier = res.data[toCurerncy];
return multiplier*units;
}

