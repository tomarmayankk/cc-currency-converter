# Currency Converter Node Package

A simple Node.js package for converting currencies using the cc-currency-converter library.

## Installation

Install the package using npm:

```bash
npm install cc-currency-converter
```
## Import
Import the package by using the following block of code
```bash
import { convertCurrency } from "cc-currency-converter";
```
## Ussage
```bash
convertCurrency("USD", "INR", 4)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
```
## API
convertCurrency(sourceCurrency, targetCurrency, amount)<br>
Converts the given amount from the source currency to the target currency.<br>

sourceCurrency: The currency code of the source currency (e.g., "USD").<br>
targetCurrency: The currency code of the target currency (e.g., "INR").<br>
amount: The amount to convert.<br>
Returns a Promise that resolves to the converted amount.<br>

## Contributing
If you find a bug or have a feature request, please open an issue or submit a pull request. Contributions are welcome!
