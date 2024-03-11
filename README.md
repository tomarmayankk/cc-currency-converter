# Currency Converter Node Package

A simple Node.js package for converting currencies using the cc-currency-converter library.

## Installation

Install the package using npm:

```bash
npm install cc-currency-converter
```
#Import
Import the package by using the following block of code
```bash
import { convertCurrency } from "cc-currency-converter";
```
#Ussage
```bash
convertCurrency("USD", "INR", 4)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
```
#API
convertCurrency(sourceCurrency, targetCurrency, amount)
Converts the given amount from the source currency to the target currency.

<h6>sourceCurrency:</h6> The currency code of the source currency (e.g., "USD").
<h6>targetCurrency:</h6> The currency code of the target currency (e.g., "INR").
<h6>amount:</h6> The amount to convert.
Returns a Promise that resolves to the converted amount.

#Contributing
If you find a bug or have a feature request, please open an issue or submit a pull request. Contributions are welcome!
